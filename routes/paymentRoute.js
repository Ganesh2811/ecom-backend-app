import express from "express";
import { paymentAction,paymentSuccess,paymentFailure } from "../controllers/paymentController.js";
const paymentRoute = express.Router();

paymentRoute
.post("/",paymentAction)
.post("/success",paymentSuccess)
.post("/failure",paymentFailure);

export default paymentRoute;