const User = require("../models/User");
var bcrypt = require("bcryptjs");

const createUser = async data => {
  let user = data;
  user.password = bcrypt.hashSync(user.password, 10);

  return User.create(user);
};

module.exports = { createUser };
