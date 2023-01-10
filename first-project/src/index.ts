import validator from 'validator';

let email = 'email@abc.com';
let ip = '192.256.255.10';

console.log(validator.isEmail(email));
console.log(validator.isIP(ip));