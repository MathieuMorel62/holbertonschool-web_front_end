/**
 * Creates a closure to change the page's style dynamically.
 * @param {number} size - The font size
 * @param {string} weight - The font weight
 * @param {string} transform - The text transformation
 * @param {string} background - The background color
 * @param {string} color - The text color
 * @returns {Function} A function that, when called, applies the given style to the page.
 */
function changeMode(size, weight, transform, background, color) {
  return function() {
    document.body.style.fontSize = size + 'px';
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main() {
  let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  const paragraph = document.createElement('p');
  paragraph.textContent = 'Welcome Holberton!';
  document.body.appendChild(paragraph);

  const spookyButton = document.createElement('button');
  spookyButton.textContent = 'Spooky';
  spookyButton.onclick = spooky;
  document.body.appendChild(spookyButton);

  const darkButton = document.createElement('button');
  darkButton.textContent = 'Dark mode';
  darkButton.onclick = darkMode;
  document.body.appendChild(darkButton);

  const screamButton = document.createElement('button');
  screamButton.textContent = 'Scream mode';
  screamButton.onclick = screamMode;
  document.body.appendChild(screamButton);
}

main();
