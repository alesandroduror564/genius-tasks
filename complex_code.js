/* 
   Filename: complex_code.js
   Content: This complex code demonstrates various advanced concepts in JavaScript, such as closures, higher-order functions, asynchronous programming, and OOP principles.
*/

// Constants
const PI = 3.14159;
const MAX_ATTEMPTS = 10;

// Utility function to check if a number is prime
function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

// Higher-order function to generate a Fibonacci sequence
function generateFibonacciSequence(count) {
  let fib = [0, 1];
  while (fib.length < count) {
    let next = fib[fib.length - 1] + fib[fib.length - 2];
    fib.push(next);
  }
  return fib;
}

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Asynchronous function to fetch data from an API
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return null;
  }
}

// Complex algorithm using closures
function complexAlgorithm() {
  let count = 0;

  function increment() {
    count++;
  }

  function decrement() {
    count--;
  }

  function getCount() {
    return count;
  }

  return { increment, decrement, getCount };
}

// Event-driven programming example
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  console.log('Button clicked!');
});

// Main program
console.log('Starting the program...');

for (let i = 1; i <= MAX_ATTEMPTS; i++) {
  console.log(`Attempt #${i}`);

  if (isPrime(i)) {
    console.log(`${i} is a prime number!`);
  }

  if (i % 3 === 0) {
    console.log(`${i} is divisible by 3!`);
  }
}

const fibonacciSequence = generateFibonacciSequence(10);
console.log('Fibonacci Sequence:', fibonacciSequence);

const john = new Person('John Doe', 30);
john.introduce();

fetchData('https://api.example.com/data')
  .then((data) => console.log('Fetched data:', data))
  .catch((error) => console.error('Failed to fetch data:', error));

const algorithm = complexAlgorithm();
algorithm.increment();
console.log('Count:', algorithm.getCount());

console.log('Program finished.');