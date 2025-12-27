import express from 'express';
import { loginAction,registerAction } from '../controllers/registerController.js';
const registerRoute = express.Router();
// localhost:9000/users/new-user
// localhost:9000/users/login
registerRoute
.post("/new-user" , registerAction)
.post("/login" , loginAction);

export default registerRoute;
