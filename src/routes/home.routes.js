import {Router} from "express";
const router = Router()

import * as homeCtrl from "../controllers/home.controller.js";
import { authJwt } from "../middlewares/index.js";

router.get("/home", [authJwt.verifyToken], homeCtrl.getHome);

export default router;