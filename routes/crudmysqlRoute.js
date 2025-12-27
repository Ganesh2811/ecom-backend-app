import express from 'express';
import { addUser,showUser,deleteUser,updateUser } from '../controllers/crudmysqlController.js';
const crudmysqlRoute = express.Router();

crudmysqlRoute
.get("/" , showUser)
.post("/" , addUser)
.delete("/" , deleteUser)
.put("/" , updateUser);

export default crudmysqlRoute;
