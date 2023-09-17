require('./util')



// When the module has a function inside it the the function will run even though we have not assign it to a variable.
// When we invoke the module it invoke the function.

// When node export any file it wraps ina function. We have call the function in te util so when import it will execute.
// The function is executed in the util file. So when call it is also executed in the app file.