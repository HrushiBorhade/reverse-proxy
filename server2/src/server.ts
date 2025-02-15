import app from "./app";
import { config } from "./config/config";

app.listen(Number(config.port), () => {
  console.log(`🚀 Server running on port ${config.port} in ${config.env} mode`);
});
