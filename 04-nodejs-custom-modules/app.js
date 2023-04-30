const util = require("./util/util");

util.greeting("Marwan");
const name = 'Marwan'
const revStr = util.strReverse(name);
console.log(`${revStr} is the reverse of ${name}`);
