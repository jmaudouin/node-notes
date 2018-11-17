const Evt = require('./evt');

class Achat extends Evt{
  constructor(type,data){
    super(type,data)
    this.txTva = data.txTva || 20
    this.montant = data.montant || Math.round(Math.random*1000+1000)
  }
  survient(){
    return `Achat de marchandises pour un montant de ${this.montant} (TVA : ${this.txTva})`
  }
}
module.exports = Achat
