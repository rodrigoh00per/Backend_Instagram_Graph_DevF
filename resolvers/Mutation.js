const actions = require("../actions");

const registrar = (_, args, context, info) => {
  console.log("entre");
  return actions
    .UserActions.createUser(args.data)
    .then(user => {
      console.log(user);
  
      return user;
    })
    .catch(err => {});
};

module.exports = { registrar };
