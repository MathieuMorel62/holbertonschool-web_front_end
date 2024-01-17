/**
 * Welcome function that displays a welcome message.
 * @param {string} firstName - The first name.
 * @param {string} lastName - The last name.
 * @returns {void}
 */
function welcome(firstName, lastName) {
  let fullName = firstName + ' ' + lastName;

  function displayFullName() {
    alert('Welcome ' + fullName + '!');
  }
  displayFullName();
}
