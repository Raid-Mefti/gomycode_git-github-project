// Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Count Characters
function countCharacters(str) {
    return str.length;
}

// Capitalize Words
function capitalizeWords(sentence) {
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Find Maximum Value in an Array
function findMax(arr) {
    return Math.max(...arr);
}

// Find Minimum Value in an Array
function findMin(arr) {
    return Math.min(...arr);
}

// Sum of Array
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Calculate Factorial
function factorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}

// Prime Number Check
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Generate Fibonacci Sequence
function generateFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

