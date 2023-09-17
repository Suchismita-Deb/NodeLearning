// Build In Module
//OS
//Path
//FS
//HTTP

const os = require('os');
//no ./ it is going to be only os.

//info about the current user
const user = os.userInfo();
console.log(user);

//Method return the system uptime in seconds.
console.log(`The system uptime is ${os.uptime()} seconds`);
const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOs);