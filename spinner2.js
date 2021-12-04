const spinner = ['\r|   ', '\r/   ', '\r-   ','\r\\   ','\r|  '  ]
const increment = 200;
let delay = 0;

for (const i of spinner) {
  setTimeout(()=> {
    process.stdout.write(i);
  }, delay);
  delay += increment;

};

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|  ');
// }, 900);
