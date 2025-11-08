// Print the full path of the current file
console.log('__filename:', __filename);

// Print the directory path of the current file
console.log('__dirname:', __dirname);

// Define a global variable
global.myGlobalVar = 'Hello from global variable!';

// Function that accesses the global variable
function printGlobalVar() {
  console.log(global.myGlobalVar);
}

printGlobalVar();
