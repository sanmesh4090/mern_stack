// Synchronous callback example
function processData(data, callback) {
  console.log('Processing data synchronously...');
  callback(data.toUpperCase());
}

function printResult(result) {
  console.log('Result:', result);
}

// Call the function with data and a callback
processData('hello', printResult);
