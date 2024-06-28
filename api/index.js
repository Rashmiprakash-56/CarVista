import express from 'express';
import connectdb from './config/db.js';
import authRoutes from './Routes/auth.js';
import carRoutes from './Routes/car.js';
import paymentRoute from './Routes/payment.js'
import cookieParser from 'cookie-parser'; 
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
connectdb();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(cors({
  origin: 'http://localhost:5173', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/cars', carRoutes);
app.use('/api/payment' , paymentRoute);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} port`);
});
