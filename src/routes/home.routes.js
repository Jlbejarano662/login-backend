import {Router} from "express";
const router = Router()

import * as homeCtrl from "../controllers/home.controller.js";
import * as authJwt from "../middlewares/authJwt.js";

router.get("/home", [authJwt.verifyToken], homeCtrl.getHome);

export default router;