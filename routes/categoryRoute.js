import express from "express";
import { addCategory, showCategory } from "../controllers/categoryController.js";
import verifyToken from "../middlewares/verifyToken.js";
const categoryRoute = express.Router();

categoryRoute
.get("/",showCategory)
.post("/",addCategory);

export default categoryRoute;