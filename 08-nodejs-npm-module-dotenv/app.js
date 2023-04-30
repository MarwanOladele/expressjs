const dotenv = require("dotenv");

dotenv.config({ path: "./config/.env" });

const secretKey = process.env.JWT_SECRET_KEY;
const localHost = process.env.LOCAL_HOST;

console.log(secretKey);
console.log(localHost);
