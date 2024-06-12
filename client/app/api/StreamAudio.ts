// pages/api/streamAudio.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, GridFSBucket } from 'mongodb';

const mongoUrl = 'mongodb+srv://khaledbahaa2012:a0RycYZtfXQnRfqB@cluster0.oli8qgt.mongodb.net/'; // Ensure your MongoDB URI is stored in the environment variables
const dbName = 'Grad';

let cachedClient = null;
let cachedDb = null;

async function connectToMongoDB() {
    if (cachedDb && cachedClient) {
        return { db: cachedDb, client: cachedClient };
    }

    const client = new MongoClient(mongoUrl);
    await client.connect();
    const db = client.db(dbName);
    cachedClient = client;
    cachedDb = db;
    return { db, client };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { db } = await connectToMongoDB();
        const bucket = new GridFSBucket(db, { bucketName: 'audios' });
        
        const filename = req.query.filename as string;
        const downloadStream = bucket.openDownloadStreamByName(filename);
        
        res.setHeader('Content-Type', 'audio/mpeg');
        downloadStream.pipe(res);
    } catch (error) {
        console.error('Failed to stream file:', error);
        res.status(500).json({ message: 'Failed to stream file', error });
    }
}
