import express from "express";
import { getProductsController } from "../controllers/productController";

const router = express.Router();

router.get("/", getProductsController);

export default router;
