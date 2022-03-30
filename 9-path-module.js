const path = require('path');

console.log(path.sep);

const filePath1 = path.join('/content', 'subfolder', 'test.txt')
const filePath2 = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath1);
console.log(filePath2);     //this gives same path even it contains extra slash - it is removed 

const base = path.basename(filePath1);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);