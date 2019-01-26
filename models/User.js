const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

let Schema = mongoose.Schema;

var UserSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es necesario"]
  },
  apellido_paterno: {
    type: String,
    required: [true, "El apellido paterno es necesario"]
  },
  apellido_materno: {
    type: String,
    required: [true, "El apellido materno es requerido"]
  },
  username: {
    type: String,
    required: [true, "El username es requerido"]
  },
  password: {
    type: String,
    required: [true, "El password es requerido"]
  }
});

UserSchema.plugin(uniqueValidator, { message: "El {Path} debe de ser unico" });

module.exports = mongoose.model("users", UserSchema);
