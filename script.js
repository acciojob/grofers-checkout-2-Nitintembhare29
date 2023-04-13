//your code here
// Get all the elements with data-ns-test="prices"
const prices = document.querySelectorAll('[data-ns-test="prices"]');

// Initialize the total price to 0
let totalPrice = 0;

// Loop through each element and add its price to the total price
prices.forEach(price => {
  totalPrice += parseFloat(price.innerText);
});

// Get the element with data-ns-test="grandTotal"
const grandTotal = document.querySelector('[data-ns-test="grandTotal"]');

// Set its innerText to the total price
grandTotal.innerText = totalPrice.toFixed(2);
