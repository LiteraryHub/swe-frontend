import type { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import { MongoClient, GridFSBucket } from 'mongodb';
import { IncomingForm } from 'formidable';

// MongoDB URI and database name
const mongoUrl = 'mongodb+srv://khaledbahaa2012:a0RycYZtfXQnRfqB@cluster0.oli8qgt.mongodb.net/';
const dbName = 'Grad';

// Set up MongoDB connection
const clientPromise = MongoClient.connect(mongoUrl);

// Configure multer for file handling
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size to 10MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('audio/')) {
      cb(null, true);
    } else {
      cb(new Error('Only audio files are allowed!'), false);
    }
  },
}).single('audiofile');

export const config = {
  api: {
    bodyParser: false, // Disabling the default body parser because we're handling multipart/form data
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Process the file upload in an API route
  if (req.method === 'POST') {
    upload(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(500).json({ error: err.message });
      } else if (err) {
        return res.status(500).json({ error: err.message });
      }

      // If no files are uploaded
      if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
      }

      const client = await clientPromise;
      const db = client.db(dbName);
      const bucket = new GridFSBucket(db, { bucketName: 'audios' });

      // Create a stream to upload from buffer
      const uploadStream = bucket.openUploadStream(req.file.originalname, {
        contentType: req.file.mimetype,
      });
      uploadStream.end(req.file.buffer);

      uploadStream.on('finish', () => {
        res.status(201).json({
          message: 'File uploaded successfully',
          file: req.file.originalname,
          fileId: uploadStream.id,
        });
      });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
