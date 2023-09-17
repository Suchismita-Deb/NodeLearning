const name = require('./names')
// For module name we have to use ./ If the file is in another folder then ../
const sayHii = require('./util')

// console.log(name);
sayHii("John");
// The variable name should be same. It can be anything like sayHii.
// sayHi(secret);// This is not accessible.
sayHii(name.david);