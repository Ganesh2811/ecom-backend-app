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

// DB Connection
dbConnection()
  .then(() => console.log('Database connected'))
  .catch(err => console.error(err));

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static uploads
app.use('/uploads', express.static('uploads'));

const API_BASE = '/api';

// Make uploads available at /api/uploads
app.use(`${API_BASE}/uploads`, express.static('uploads'));

// API routes
app.use(`${API_BASE}/users`, registerRoute);
app.use(`${API_BASE}/category`, categoryRoute);
app.use(`${API_BASE}/brand`, brandRoute);
app.use(`${API_BASE}/product`, productRoute);
app.use(`${API_BASE}/payment`, paymentRoute);
app.use(`${API_BASE}/crudmysql`, crudmysqlRoute);
app.use(`${API_BASE}/checkToken`, checkTokenRoute);

// Health check
app.get(`${API_BASE}/health`, (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 9900;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
