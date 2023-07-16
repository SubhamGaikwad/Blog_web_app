import User from "../models/user.js";
import bcrypt from "bcrypt";
export const SignupUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = {
      name: req.body.name,
      username: req.body.username,
      password: hashedPassword,
    };
    const newUser = new User(user);

    await newUser.save();

    return res.status(200).json({ msg: "signup successfull" });
  } catch (error) {
    res.status(500).json({ msg: "Error while signup the user" });
  }
};
