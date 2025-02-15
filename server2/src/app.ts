import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import productRoutes from "./routes/productRoutes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(cors());
app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {
  res.send("Server2 is running");
});

app.use("/api/products", productRoutes);

app.use(errorHandler);

export default app;
