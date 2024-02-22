/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

 
function calculateSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function calculateTimeTaken(func, input) {
    const startTime = new Date().getTime();
    func(input);
    const endTime = new Date().getTime();
    const timeTaken = (endTime - startTime) / 1000; // Convert to seconds
    return timeTaken;
}

// Test cases
const n1 = 100;
const n2 = 100000;
const n3 = 1000000000;

console.log(`Time taken for sum 1-${n1}: ${calculateTimeTaken(calculateSum, n1)} seconds`);
console.log(`Time taken for sum 1-${n2}: ${calculateTimeTaken(calculateSum, n2)} seconds`);
console.log(`Time taken for sum 1-${n3}: ${calculateTimeTaken(calculateSum, n3)} seconds`);

 