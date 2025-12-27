import express from "express";
import { addProduct ,getProduct,getProductById,getProductByCategoryId} from "../controllers/productController.js";
import verifyToken from "../middlewares/verifyToken.js";


const prodctRoute = express.Router();

prodctRoute
.post("/" ,addProduct)
.get("/",getProduct)
.get("/:id",getProductById)
.get("/category/:id",getProductByCategoryId);

export default prodctRoute;