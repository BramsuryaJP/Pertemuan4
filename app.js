
// core modules

// file system
const fs = require('fs');

//readine
const readline = require('readline');

// menuliskan string ke file (synchronous)
// fs.writeFileSync('test.txt', 'Hello world secara synchronous!');

// membaca file (asynchronous)
// fs.readFile('test.txt', 'utf-8', (error,data) => {
//   if (error) throw error;
//   console.log(data);
// })

// readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is tour name ? ', (name) => {
  rl.question('Input your phone number : ', (phoneNumber) => {
    rl.question('Input your email : ', (email) => {
      console.log(`Thank you ${name}, your phone number is ${phoneNumber}, and this is your email ${email}`);

      // menutup readline
      rl.close();
    });
  });
});