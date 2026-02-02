import express from 'express';
import testRoutes from './routes/testRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

connectDB();

app.use(express.json());

app.use("/api/test",testRoutes);


app.listen(PORT, () => {
  console.log('Server is running on port:', PORT);
});