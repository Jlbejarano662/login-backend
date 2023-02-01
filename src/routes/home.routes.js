import {Router} from "express";
const router = Router()

import * as homeCtrl from "../controllers/home.controller";
import { authJwt } from "../middlewares";

router.get("/home", [authJwt.verifyToken], homeCtrl.getHome);

export default router;