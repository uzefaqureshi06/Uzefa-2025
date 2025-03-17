import express from 'express';
import { createAuth, deleteAuth, getAllAuth } from '../controller/authController.js';
export const authRouter =express.Router();

authRouter.post('/',createAuth)
authRouter.get('/', getAllAuth);
authRouter.delete('/:id', deleteAuth);