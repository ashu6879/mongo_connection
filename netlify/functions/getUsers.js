const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;

exports.handler = async function(event, context) {
  console.log('Function start');
  try {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connecting to MongoDB');
    await client.connect();
    console.log('Connected to MongoDB');

    const database = client.db('yourDatabaseName');
    const collection = database.collection('yourCollectionName');
    console.log('Querying database');
    const users = await collection.find({}).limit(50).toArray();

    console.log('Query complete, closing connection');
    await client.close();

    return {
      statusCode: 200,
      body: JSON.stringify(users),
    };
  } catch (error) {
    console.error('Error occurred:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch users', details: error.message }),
    };
  }
};
