const stock = {
  macbook: 2,
  iphone: 4
};

/**
* Decrements stock and logs payment processing.
 * @param {string} itemName - Name of the item.
 */
function processPayment (itemName) {
  stock[itemName] = stock[itemName] - 1;
  console.log(`Payment is being processed for ${itemName}`);
}

/**
 * Logs out-of-stock message.
 * @param {string} itemName - Name of the item.
 */
function processError (itemName) {
  console.log(`No more ${itemName} in stock`);
  console.log('Payment is not being processed');
}

/**
 * Checks stock and calls appropriate callback.
 * @param {string} itemName - Name of the item.
 * @param {function} callbackPayment - Function for payment processing.
 * @param {function} callbackError - Function for error handling.
 */
function processOrder (itemName, callbackPayment, callbackError) {
  console.log(`Verifying the stock of ${itemName}`);
  if (stock[itemName] > 0) {
    callbackPayment(itemName);
  } else {
    callbackError(itemName);
  }
}

const item = prompt('Please enter the item you would like to purchase (Macbook, iPhone)');
processOrder(item.toLowerCase(), processPayment, processError);
