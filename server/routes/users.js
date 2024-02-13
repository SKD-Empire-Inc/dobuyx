var express = require('express');
var router = express.Router();

/* GET users listing. */
const data=[
  {name:"selvakumar",
age:20},
{name:"thirumalai",
age:25},{
  name:"Amos",
  age:30
}
]
router.get('/', function(req, res, next) {
  res.send(data);
});

module.exports = router;
