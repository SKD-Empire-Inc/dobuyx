var express = require('express');
const client=require('../server');
var router = express.Router();

var data;
async function run() {
  try {
    const database = client.db('users');
    const users = database.collection('credential');

    // Query for a movie that has the title 'Back to the Future'
    const query = { name: "Andrea Le" };
    const user = await users.find({ }).toArray();
   data=user;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

router.get('/', function(req, res, next) {
  res.send(data);
});

module.exports = router;
