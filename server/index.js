import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectToDB from './db/connection.js';
import { categoryRouter } from './routes/category.js';
import { cardRouter } from './routes/card.js';
import { authRouter } from './routes/auth.js';

const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1/category',categoryRouter);
app.use('/api/v1/card',cardRouter);
app.use('/api/v1/auth',authRouter);
connectToDB()  ; 

const PORT=8000;
app.listen(PORT,()=>{
    console.log(`Server is running on PORT:${PORT}`);
})