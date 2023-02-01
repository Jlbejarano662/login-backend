import User from "../models/User";
import Role from "../models/Role";

export const getHome = async (req, res) => {
  const user = await User.findById(req.userId);
  const roles = await Role.find({ _id: { $in: user.roles } });
  console.log(roles);
  res.json("Hello " + roles.map(role => role.name) + "!");
};
