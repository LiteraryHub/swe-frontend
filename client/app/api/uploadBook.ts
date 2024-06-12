// pages/api/upload-and-forward.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import axios from 'axios';
import FormData from 'form-data';
import formidable from 'formidable-serverless';
import fs from 'fs';

// MongoDB connection URI and database/collection names
const MONGODB_URI = 'mongodb+srv://khaledbahaa2012:a0RycYZtfXQnRfqB@cluster0.oli8qgt.mongodb.net/';
const DB_NAME = 'Grad';
const COLLECTION_NAME = 'Book_Upload';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Form parsing error.' });
    }

    const uploadedFile = files.file;
    if (!uploadedFile || Array.isArray(uploadedFile)) {
      return res.status(400).json({ message: 'No file uploaded.' });
    }

    try {
      const filePath = 'C:/Users/khale/Documents/arabic book.docx'
      const fileContent = fs.readFileSync(filePath);

      const formData = new FormData();
      formData.append('file', fileContent,{ filepath: filePath });

      const targetUrl = 'http://127.0.0.1:8000/word-text-extractor/upload-word';
      const response = await axios.post(targetUrl, formData, { headers: formData.getHeaders() });

      // Insert the response data into MongoDB
      const client = new MongoClient(MONGODB_URI);
      await client.connect();
      const db = client.db(DB_NAME);
      const collection = db.collection(COLLECTION_NAME);
      await collection.insertOne(response.data);

      await client.close();

      res.json({ message: 'File processed and data stored in MongoDB', data: response.data });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Failed to process file or store data in MongoDB.' });
    
    }
  });
}
