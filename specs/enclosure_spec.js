var assert = require("assert");
var Dinosaur = require("../dinosaur.js");
var Enclosure = require("../enclosure.js");


describe("Enclosure", function() {

  beforeEach(function() {
    var dinosaur1 = new Dinosaur("Tyranosaurus", 4)
    var dinosaur2 = new Dinosaur("Velociraptor", 2);
    var dinosaur3 = new Dinosaur("Triceratops", 3); 
    enclosure = new Enclosure;

 
  })

	it("enclosure should be empty at start", function(){
      assert.strictEqual(enclosure.number, 0);

	 })


  it("can add dinosaur to enclosure", function(){
      enclosure.fill();
      assert.strictEqual(enclosure.number, 1);

  })


  it("can remove dinosaur of a type from enclosure", function(){
      // var dinosaur1 = new Dinosaur("Tyranosaurus", 4)
      enclosure.add(1);
      enclosure.remove(1)
      assert.strictEqual(enclosure.number, 0);

  })

  it("can get all dinosaurs with offspring count of more than 2", function(){
      // var dinosaur1 = new Dinosaur("Tyranosaurus", 4)
      enclosure.add(1);
      enclosure.add(1);
      assert.strictEqual(enclosure.number, 2);

  })
  


  })

