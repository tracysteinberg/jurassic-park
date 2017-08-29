var assert = require("assert");
var Dinosaur = require("../dinosaur.js");
var Enclosure = require("../enclosure.js");

describe("Dinosaur", function() {

	beforeEach(function() {
    enclosure = new Enclosure;  
 
	})

  it("dinosaur should have a type", function() {
      var dinosaur1 = new Dinosaur("Tyranosaurus", 4)
      assert.strictEqual(dinosaur1.type, "Tyranosaurus");

  })


   it("dinosaur should have offspring ", function() {
      var dinosaur1 = new Dinosaur("Tyranosaurus", 4)
      assert.strictEqual(dinosaur1.offspring, 4);

  })



})