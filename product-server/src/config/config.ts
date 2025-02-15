import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || "8081",
  env: process.env.NODE_ENV || "development",
};
