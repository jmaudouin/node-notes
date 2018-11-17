var express = require('express');
var app = express();
var url = require('url');

const port = process.env.PORT || 3000


app.get('/chercheParMots', function(request, response) {
  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;

  response.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
  });
  var json = require('./chercheparmots')(query)
  response.end(JSON.stringify(json));
});


app.listen(port,()=>{console.log('serveur écoute le port '+port)});






/*



var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
  });
  let json = ["pokpok","iuhiuh iuhiuh"];
  response.end(JSON.stringify(json));
}).listen(3000);
*/
