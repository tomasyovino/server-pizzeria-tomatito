import { Router } from "express";
import * as orderCtrl from "../controllers/order.controllers.js";

const orderRouter = Router();

orderRouter.get("/", orderCtrl.getAllOrders);
orderRouter.post("/", orderCtrl.createOrder);
orderRouter.put("/:id", orderCtrl.updateOrderById);
orderRouter.delete("/:id", orderCtrl.deleteOrderById);

export default orderRouter;