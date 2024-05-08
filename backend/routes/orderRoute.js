import express from 'express';
import authMiddleware from '../middleware/auth.js'
import { placingOrder, userOrder } from '../controllers/orderController.js';
const orderRouter = express.Router();
orderRouter.post('/place',authMiddleware,placingOrder);
orderRouter.post('/userorders',authMiddleware,userOrder);
export default orderRouter;