import express from "express";
import verifyToken from "../middlewares/verifyToken.js";
const checkTokenRoute = express.Router();

checkTokenRoute
.get("/",verifyToken)

export default checkTokenRoute;