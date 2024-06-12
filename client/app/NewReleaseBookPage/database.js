// Import the MongoClient from the mongodb library
const { MongoClient } = require('mongodb');
// Import the fs module to read the JSON file
const fs = require('fs');

// Connection URI for your MongoDB database
const uri = 'mongodb+srv://khaledbahaa2012:a0RycYZtfXQnRfqB@cluster0.oli8qgt.mongodb.net/';

// Function to read the JSON file
const readJSONFile = (filename) => {
  try {
    const data = fs.readFileSync(filename, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return null;
  }
};

// Path to the JSON file containing the book data
const jsonFilePath = './books.json';

// Function to send data to MongoDB
const sendDataToMongoDB = async () => {
  // Read the JSON file
  const books = readJSONFile(jsonFilePath);
  if (!books) {
    console.error('No data to send to MongoDB. Exiting...');
    return;
  }

  // Create a new MongoClient
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Connect to the MongoDB server
    await client.connect();

    // Access the database and collection
    const database = client.db('Grad');
    const collection = database.collection('Book');

    // Insert the books data into the collection
    const result = await collection.insertMany(books);
    console.log('Data sent to MongoDB successfully:', result.insertedCount, 'documents inserted');
  } catch (error) {
    console.error('Error sending data to MongoDB:', error);
  } finally {
    // Close the connection
    await client.close();
  }
};

// Call the function to send data to MongoDB
sendDataToMongoDB();
