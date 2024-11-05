let display = document.getElementById('display');

// Function to append values to the display
function appendValue(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to handle the arithmetic calculations
function calculateResult() {
    try {
        // The expression entered is parsed and evaluated
        let result = evaluateExpression(display.value);

        // Display the result
        display.value = result;
    } catch (error) {
        display.value = 'Error';  // In case of invalid input
    }
}

// Function to evaluate the expression securely
function evaluateExpression(expression) {
    // Validate and sanitize the expression to only allow numbers and arithmetic operators
    const validExpression = /^[0-9+\-*/().\s]*$/;

    if (!validExpression.test(expression)) {
        throw new Error('Invalid input');
    }

    // Using JavaScript's built-in eval function can be risky, so we only allow valid characters
    // You can implement a more advanced parser if needed, or use libraries like math.js for more complex parsing
    return new Function('return ' + expression)();
}
