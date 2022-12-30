const User = require("../model/userModel");

exports.addUser = async (req, res) => {
  try {
    const user = User(req.body);
    await user.save();
    res.status(201).send({
      status: 201,
      message: "User Added",
      user,
    });
  } catch (error) {
    res.status(400).send({
      status: 400,
      message: "Something went to wrong",
      error,
    });
  }
};

exports.getUsersList = async (req, res) => {
  try {
    const userList = await User.find();
    res.status(201).send({
      status: 200,
      message: "Users List",
      users: userList,
    });
  } catch (error) {
    res.status(400).send({
      status: 400,
      message: "Something went to wrong",
      error,
    });
  }
};
