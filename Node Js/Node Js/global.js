const readline = require('readline');

// 1. Buffer: Create and manipulate a buffer
const buffer = Buffer.from('Hello, Node.js!');
console.log('Buffer contents:', buffer);
console.log('Buffer as string:', buffer.toString());

// Modify buffer content (e.g., change 'Node.js' to 'World!')
buffer.write('World!', 7);
console.log('Modified Buffer as string:', buffer.toString());

// 2. Console: Various logs and timing
console.log('This is a normal log message.');
console.warn('This is a warning message.');
console.error('This is an error message.');

console.time('loopTimer');
for (let i = 0; i < 1e6; i++) {}
console.timeEnd('loopTimer');

// 3. Process: Extended usage

// Print basic info
console.log('Current working directory:', process.cwd());
console.log('Node.js version:', process.version);
console.log('Platform:', process.platform);

// Print memory usage
console.log('Memory usage:', process.memoryUsage());

// Print environment variables (some of them)
console.log('Environment variables:', {
  PATH: process.env.PATH,
  HOME: process.env.HOME || process.env.USERPROFILE,
  NODE_ENV: process.env.NODE_ENV || 'not set',
});

// Print command-line arguments
console.log('Command-line arguments:', process.argv);

// Handle uncaught exceptions globally
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err.message);
  process.exit(1);
});

// Setup reading from stdin using process.stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter your name: ', (name) => {
  console.log(`Hello, ${name}!`);
  
  // Exit gracefully after greeting
  rl.close();
  console.log('Exiting process...');
  process.exit(0);
});
