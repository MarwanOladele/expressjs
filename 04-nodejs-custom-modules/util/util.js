const greeting = (name) => {
  console.log(`Hello! ${name}`);
};

const strReverse = (str) => {
  let temp = "";
  for (let index = str.length - 1; index >= 0; index--) {
    temp += str.charAt(index);
  }
  return temp;
};

module.exports = {
  greeting,
  strReverse,
};
