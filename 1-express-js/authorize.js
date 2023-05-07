const authorize = (req, res, next) => {
  console.log("authorise");
  next();
};

module.exports = authorize;
