import express from 'express';
import dotenv from 'dotenv';

//ROUTES
import authRoutes from './routes/auth.route.js';

//DB
import { connectDB } from './lib/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//AUTHENTICATION
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:' + PORT);
  connectDB();
});
