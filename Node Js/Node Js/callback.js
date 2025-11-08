// A function that takes a callback and calls it after some operation
function greetUser(name, callback) {
  console.log('Preparing to greet...');
  
  // Simulate some async operation using setTimeout
  setTimeout(() => {
    console.log(`Hello, ${name}!`);
    callback(); // Call the callback function when done
  }, 1000);
}

// A callback function
function afterGreet() {
  console.log('Greeting is done!');
}

// Call greetUser with a name and the callback function
greetUser('Kabir', afterGreet);
