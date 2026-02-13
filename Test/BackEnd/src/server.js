import express from "express";
import testRoutes from "./routes/testRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimter from "./middleware/rateLimiter.js";
import cors from "cors";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors(
  {
    origin: "http://localhost:5173",
  }
));
app.use(express.json());
app.use(rateLimter);


app.use((req, res, next) => {
  console.log(`req method is ${req.method} and req url is ${req.url}`);
  next();
});

app.use("/api/test", testRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
  });
});
