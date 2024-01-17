/**
 * Returns a function that divides a number by firstNumber.
 * @param {number} firstNumber - The divisor.
 * @returns {Function} - Division function.
 */
function divideBy(firstNumber) {
  return function(secondNumber) {
    return secondNumber / firstNumber
  }
}

/**
 * Returns a function that adds firstNumber to a number.
 * @param {number} firstNumber - The number to add.
 * @returns {Function} - Addition function.
 */
function addBy(firstNumber) {
  return function(secondNumber) {
    return firstNumber + secondNumber
  }
}

const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);
