import { Router } from "express";
import orderRouter from "./order.routes.js";
import productRouter from "./product.routes.js";

const router = Router();

router.use("/products", productRouter);
router.use("/orders", orderRouter);

export default router;