const mongoose = require("mongoose");
const validate = require("validator");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validate.isEmail(value)) {
        throw new Error("Enter Valid Email");
      }
    },
  },
  password: {
    type: String,
    required: true,
    validate(value) {
      if (!validate.isStrongPassword(value)) {
        throw new Error("Enter Strong Password");
      }
    },
  },
});

userSchema.path("email").validate(async (email) => {
  const userCount = await mongoose.models.User.countDocuments({ email });
  return !userCount;
}, "Email already exists");

const User = mongoose.model("User", userSchema);
module.exports = User;
