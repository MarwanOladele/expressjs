const jwt = require("jsonwebtoken");

const user = {
  id: "abcd-101-dwkjeq-cfjkdsac",
  name: "admin",
  email: "admin@gmail.com",
};

const payload = {
  id: user.id,
  name: user.name,
};

let secretKey = "fcwikdc";

var token = jwt.sign(payload, secretKey, { expiresIn: 3000 });

console.log(token);

jwt.verify(token, secretKey, function (err, decoded) {
  if (err) throw err;
  console.log(decoded);
});

