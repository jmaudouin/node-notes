
class Evt {
  constructor(type,data){
    this.id = data.id,
    this.type = type
  }
  survient(){
    return "L'évènement d'ID "+this.id+" (de type \""+this.type+"\") est survenu."
  }
}

module.exports = Evt
