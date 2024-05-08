import express from "express";
import validate, { ValidationSource } from "../middleware/validate";
import { createProduct, createProductCategory, deleteProduct, deleteProductCategory, updateProduct, updateProductCategory } from "../schema/product";

import OrderController from '../controllers/order.controller'
import { createOrder, fetchOrder, fetchOrderDetails } from "../schema/order";

const router = express.Router();

router.get("/",validate(fetchOrder,ValidationSource.QUERY),OrderController.fetchOrders)
router.get("/orderDetails",validate(fetchOrderDetails,ValidationSource.QUERY),OrderController.fetchOrderDetails)
router.post('/',validate(createOrder,ValidationSource.BODY),OrderController.orderCreate)

export default router