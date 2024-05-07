import express from 'express';
import authMiddleware from '../middleware/auth.js'
import { placingOrder } from '../controllers/orderController.js';
const orderRouter = express.Router();
orderRouter.post('/place',authMiddleware,placingOrder);
export default orderRouter;