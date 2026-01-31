import express from 'express';
import testRoutes from './routes/testRoutes.js';

const app = express();

app.use("/api/test",testRoutes);


app.listen(8080, () => {
  console.log('Server is running on port 8080');
});