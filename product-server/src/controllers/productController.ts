import { Response, Request, NextFunction } from "express";
import { getProducts } from "../services/productService";

export const getProductsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
};
