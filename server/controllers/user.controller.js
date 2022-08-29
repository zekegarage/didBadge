const UserService = require("../services/user.service");

exports.user_post = async (req, res, next) => {
  try {
    const { address } = req.body;
    const result = await UserService.createUser(address);
    result === 1 ? res.status(400).json({message:"Login Success!"}): res.status(201).json({message: "User Created!", data: result})
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};
