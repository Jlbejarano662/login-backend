import express, { json } from "express";
import morgan from "morgan";
import pkg from "../package.json" assert { type: "json" };

import { createRoles } from "./libs/initialSetup.js";

import authRoutes from "./routes/auth.routes.js";
import homeRoutes from "./routes/home.routes.js";

const app = express();
createRoles();

app.set("pkg", pkg);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version,
  });
});
app.use("/api", homeRoutes);
app.use("/api/auth", authRoutes);

export default app;
