const { performance } = require("perf_hooks");


/**
 * Checks if a number is prime.
 * 
 * @param {number} number The number to check.
 * @returns {boolean} True if the number is prime, false otherwise.
 */
function isPrime(number) {
  if (number < 2) return false;
  for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
    if (number % divisor === 0) {
      return false;
    }
  }
  return true;
}


/**
 * Counts the number of prime numbers between 2 and 100.
 * 
 * @returns {number} The count of prime numbers.
 */
function countPrimeNumbers() {
  let primeCount = 0;
  for (let number = 2; number <= 100; number++) {
    if (isPrime(number)) {
      primeCount += 1;
    }
  }
  return primeCount;
}


const startTime = performance.now();

for (let iteration = 0; iteration < 100; iteration++) {
  setTimeout(countPrimeNumbers, 0)
}

setTimeout(() => {
  let endTime = performance.now();
  console.log(`Execution time of calculating prime numbers 100 times was ${endTime - startTime} milliseconds.`);
}, 0);
