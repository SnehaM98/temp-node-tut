const {readFileSync, writeFileSync} = require('fs');

// const fs = require('fs');
// fs.readFileSync()

console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

//console.log(first, second);

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`);  //if result-sync.txt file is not created then it creates and write the data which is in second parameter, else if file exists already then it overwrites with the data which is present already in it.

//If want to append the data in a file which is already created then use flag
writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second}`, {flag: 'a'});

console.log('done with this task');
console.log('starting the next one');