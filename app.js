//npm - global command, comes with node
//npm --version

//local dependency - use it only in this particular project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo install -g <packageName> (mac)

//package.json - manifest file(stores imp info about project/package)
//manual approach(create package.json in the root, create properties etc)
//npm init (step by step question, press enter to skip)
//npm init -y (everything default)

const _ = require('lodash');

const items = [1,[2,[3,[4]]]];
//flattenDeep() method is from lodash package
const newItems = _.flattenDeep(items);
console.log(newItems);