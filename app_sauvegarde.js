console.log("lecture 23");
const fs = require('fs');
const _ = require('lodash');


const http = require('http')
const port = 3000

const Evt = require('./evt');
const Achat = require('./evt_achat');
const Vente = require('./evt_vente');
function createEvt(type,data){
  var evtTypes = {
    achat : Achat,
    vente : Vente
  }
  if(evtTypes[type]){
    return new evtTypes[type](type,data)
  }else{
    return new Evt(type,data)
  }
}


const requestHandler = (request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  var textRep = ""
  for(var i = 0;i<=10;i++){
    var isVente = Math.random()>0.5
    var evt = createEvt(isVente ? "achat" : "vente",{
      id:i,
      montant:"2000",
      txTva:"15"
    })
    textRep+=evt.survient()+"<br>"
  }
  response.end(textRep)
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})
