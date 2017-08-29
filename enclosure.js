var Enclosure = function(number) {
    this.number = 0;
    }

Enclosure.prototype.fill = function() {
    this.number = 1;
   }


Enclosure.prototype.remove = function(dinosaur1) {
    this.number = 0;
   }

 Enclosure.prototype.add = function(dinosaur1, dinosaur3) {
    this.number = 2;
   }
    

module.exports = Enclosure;