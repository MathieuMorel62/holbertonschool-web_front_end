/**
 * Processes a payment.
 * 
 * @param {number} amount The amount to be collected.
 */
function processPayment(amount) {
  console.log(`Collecting payment of ${amount}`);
}


/**
 * Processes an order.
 * 
 * @param {number} orderId The ID of the order.
 * @param {number} amount The amount to be processed.
 */
function processOrder(orderId, amount) {
  console.log(`${orderId} is being processed`);
  processPayment(amount);
  console.log(`${orderId} has been fully processed`);
}


console.log("Porcessing orders");
processOrder(12321, 10.99);
processOrder(12322, 12.99);
processOrder(12323, 15.0);
console.log("All the orders have been processed");
