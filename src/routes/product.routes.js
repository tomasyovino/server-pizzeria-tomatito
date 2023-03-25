import { Router } from "express";
import * as productCtrl from "../controllers/product.controllers.js";

const productRouter = Router();

productRouter.get("/", productCtrl.getAllProducts);
productRouter.post("/", productCtrl.createProduct);
productRouter.put("/:id", productCtrl.updateProductById);
productRouter.delete("/:id", productCtrl.deleteProductById);

export default productRouter;