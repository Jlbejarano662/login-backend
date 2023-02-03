import User from "../models/User.js";
import Role from "../models/Role.js";

export const getHome = async (req, res) => {
  const user = await User.findById(req.userId);
  const roles = await Role.find({ _id: { $in: user.roles } });
  res.json("Hello " + roles.map((role) => role.name) + "!");
};
