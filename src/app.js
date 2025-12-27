import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import registerRoute from '../routes/registerRoute.js';
import dbConnection from '../database/db.js';
import categoryRoute from '../routes/categoryRoute.js';
import brandRoute from '../routes/brandRoute.js';
import productRoute from '../routes/productRoute.js';
import paymentRoute from '../routes/paymentRoute.js';
import crudmysqlRoute from '../routes/crudmysqlRoute.js';
import checkTokenRoute from '../routes/checkTokenRoute.js';
dbConnection().then(()=>console.log('connected')).catch(err=>console.error(err))

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/uploads', express.static('uploads'))

//localhost:9000/users
app.use("/users",registerRoute);
app.use("/category" , categoryRoute);
app.use("/brand" , brandRoute);
app.use("/product" , productRoute);
app.use("/payment" , paymentRoute);
app.use("/crudmysql" , crudmysqlRoute);
app.use("/checkToken" , checkTokenRoute);
app.listen(process.env.PORT)