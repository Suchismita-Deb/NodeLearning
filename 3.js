// Node Uses Common Js library underthehood.
// Common Js every file is module (by default).
// Module Encapsulated code only share minimum.

// We can put everything on one file.
// We can also make function and varible like password or anything in separate file and with the help of module we can export and with the help of require we can import.

const john = 'john';
const secret = "Secret message";
const david = 'david';

const sayHi = (name) => {
    console.log("Hello " + name);
};

sayHi(john);
sayHi(secret);
sayHi(david);
// We can use the variable in the entire program.
// In big project we need to put thngs in different file.
// We will export and the we will import. In the folder the module is explained.