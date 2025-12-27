import express from "express";
import { addBrand, showBrand } from "../controllers/brandController.js";
import verifyToken from "../middlewares/verifyToken.js";
const brandRoute = express.Router();

brandRoute
.get("/",showBrand)
.post("/",addBrand);

export default brandRoute;