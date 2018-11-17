var express     = require('express');
var router      = express.Router();
var app = express();
var cors = require('cors');


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) {
  res.send([1,2])
});





router.use(function(req, res, next) { // run for any & all requests
  console.log("Connection to the API.."); // set up logging for every API call
  next(); // ..to the next routes from here..
});
router.route('/').get(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');


  res.send([1,2])
})
router.route('/about').get(function(req, res, next) {
  res.send("about kitus")
});
module.exports = router;
