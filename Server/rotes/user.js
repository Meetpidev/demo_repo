import express from "express";
import {login} from "../controller/login.js";
import { updateChanelData } from "../controller/Chanle.js";
import { getAllchanel } from "../controller/Chanle.js";
import { gpoints } from "../controller/gpoints.js";


const routes = express.Router();

routes.post("/login",login);
routes.patch("/update/:id",updateChanelData);
routes.get("/getAllchanel",getAllchanel);
routes.post("/points", gpoints);

export default routes