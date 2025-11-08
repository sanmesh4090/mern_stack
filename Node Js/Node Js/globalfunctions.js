// 1. setTimeout: runs a function once after delay
const timeoutId = setTimeout(() => {
  console.log('This message is shown after 2 seconds.');
}, 2000);

// 2. clearTimeout: cancel the timeout before it happens
setTimeout(() => {
  clearTimeout(timeoutId);
  console.log('Timeout cleared before it could execute.');
}, 1000);

// 3. setInterval: runs a function repeatedly every interval
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(`Interval message #${count}`);

  // Stop after 5 times
  if (count === 5) {
    clearInterval(intervalId);
    console.log('Interval cleared after 5 executions.');
  }
}, 1000);
