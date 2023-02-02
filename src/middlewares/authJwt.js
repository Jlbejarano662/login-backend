import jwt from "jsonwebtoken";
import config from "../config.js";
import User from "../models/User.js";
import Role from "../models/Role.js";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];

    if (!token) return res.status(200).json({ message: "No token provided" });

    const decode = jwt.verify(token, config.SECRET);
    req.userId = decode.id;

    const user = await User.findById(req.userId, { password: 0 });
    if (!user) return res.status(200).json({ message: "no user found" });

    next();
  } catch (error) {
    return res.status(200).json({ message: "Unauthorized" });
  }
};

/* export const userExists = async (req, res, next) => {
  const user = await User.findById(req.userId);
  const roles = await Role.find({ _id: { $in: user.roles } });

  if (roles.length > 0) {
    next();
    return;
  }

  return res.status(403).json({ message: "Require any role" });
}; */

export const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.userId);
  const roles = await Role.find({ _id: { $in: user.roles } });

  console.log(await Role.find());
  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === "admin") {
      next();
      return;
    }
  }

  return res.status(200).json({ message: "Require admin role" });
};

export const isUser = async (req, res, next) => {
  const user = await User.findById(req.userId);
  const roles = await Role.find({ _id: { $in: user.roles } });

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === "user") {
      next();
      return;
    }
  }

  return res.status(200).json({ message: "Require user role" });
};
