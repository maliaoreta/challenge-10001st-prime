 var PrimeFinder = function (n) {

  this.n = n;
 };


PrimeFinder.prototype.getPrimeNumber = function () {

  var nthPrime = this.n;
  var primeNumCheck = 2;
  var divideBy = 2;
  var foundPrime = 0; 

  while (foundPrime !== nthPrime) {

    if (primeNumCheck % divideBy === 0 && divideBy !== primeNumCheck) {

      divideBy += 1;
    }
    else if (primeNumCheck % divideBy !== 0 && divideBy !== primeNumCheck) {
      divideBy += 1;
    }
    else {
      foundPrime += 1;
      primeNumCheck += 1;
      divideBy = 2;
    }
  }

  return primeNumCheck;
}

// if n = 6, should return 13
// start with 2 as first prime number
// increment prime number to see if 3 is prime
  // divide 3 by all numbers less than 3 to see if division result is 0
// if nothing, that's the thrid, continue until found the 6th
// if not, increment the prime num check to 4 and see if thats a prime ++

 module.exports = PrimeFinder;

 // the 10001st Prime should be 104743