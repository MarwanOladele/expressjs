const bcrypt = require("bcryptjs");

const user = {
  name: "john",
  email: "envkt@example.com",
  password: "LADOkite01",
};

const salt = bcrypt.genSaltSync(10);
const hashPassword = bcrypt.hashSync(user.password, salt);

const updatedUser = { ...user, password: hashPassword };

console.log(updatedUser);

if (bcrypt.compareSync(user.password, hashPassword)) { 
  console.log("Password matches");
} else {
  console.log("Password does not match");
}

