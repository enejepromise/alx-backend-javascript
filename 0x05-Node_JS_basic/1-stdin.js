process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const inputString = process.stdin.read();
  if (inputString) {
    process.stdout.write(`Your name is: ${inputString}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
