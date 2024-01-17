/**
 * Creates a closure function that displays a message.
 * @param {string} fullName
 * @returns {function}
 */
function welcomeMessage(fullName) {
  return function() {
    alert("Welcome " + fullName)
  }
}

let guillaume = welcomeMessage("Guillaume");
let alex = welcomeMessage("Alex");
let fred = welcomeMessage("Fred");
