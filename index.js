// Declare a variable in global scope called customerName and assign it the value 'bob'.
var customerName = 'bob';

// Write a function that accesses the global customerName variable and uppercases it.
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Write a function that sets a global variable bestCustomer to 'not bob'.
function setBestCustomer() {
    window.bestCustomer = 'not bob';
}

// Write a function that overwrites the global variable bestCustomer to 'maybe bob'.
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// Declare a constant in global scope called leastFavoriteCustomer and assign it some initial value.
const leastFavoriteCustomer = 'someone';

// Write a function that attempts to change the constant leastFavoriteCustomer (which will fail).
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new least favorite'; // This will throw an error.
}
