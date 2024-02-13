const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb+srv://selvabuisnessman:kumar123@dobuyx.u7ob9pb.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

module.exports=client;

