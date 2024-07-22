const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_CONNECTION_STRING; // MongoDB connection string from environment variables

exports.handler = async function(event, context) {
  try {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const database = client.db('alphadb');
    const collection = database.collection('wp_users');
    const users = await collection.find({}).limit(100).toArray();
    await client.close();

    return {
      statusCode: 200,
      body: JSON.stringify(users),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch users', details: error.message }),
    };
  }
};
