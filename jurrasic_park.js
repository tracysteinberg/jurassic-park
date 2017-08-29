var Dinosaur = function(type, offspring) {
     this.type = type;
     this.offspring = offspring;
 }


var Enclosure = function(number) {
    this.number = [];

    this.addDinosaur =  function(dinosaur) {
    this.number.push(dinosaur);

    this.removeDinosaur =  function(dinosaur) {
    this.number.shift(dinosaur);
    } 
  }
}

module.exports = jurrasic_park;




 
