// import challenge 7

// describe the class PrimeFinder

// write your tests here
var PrimeFinder = require('../challenge_7');
var chai = require('chai');
var expect = chai.expect;


describe('PrimeFinder', function () {

  var pf = new PrimeFinder();


  it('should be a class', function () {

    expect(PrimeFinder).to.be.a('function');
  })

  describe('getPrimeNumber', function () {

    it('should be an object instance method of PrimeFinder', function () {

      expect(pf.getPrimeNumber).to.be.a('function');
    })
  })
})