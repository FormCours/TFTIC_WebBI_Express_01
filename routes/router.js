import express from 'express';
import homeRouter from './home-router.js';
import productRouter from './product-router.js';
import demoRouter from './demo-router.js';

const router = express.Router();

homeRouter(router);
productRouter(router);
demoRouter(router);

export default router;