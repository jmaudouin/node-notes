const Evt = require('./evt');

class Vente extends Evt{
  constructor(type,data){
    super(type,data)
    this.txTva = data.txTva || 20
    this.montant = data.montant || Math.round(Math.random*1000+1000)
    this.client = data.client || "client inconnu"
  }
  survient(){
    return `Ventes pour un montant de ${this.montant} (TVA : ${this.txTva}) à ${this.client}`
  }
}
module.exports = Vente
