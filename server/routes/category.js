import express from 'express';
import { createCateogry, deleteCategory, getAllCateogry } from '../controller/categoryController.js';
export const categoryRouter =express.Router();

categoryRouter.post('/',createCateogry)
categoryRouter.get('/', getAllCateogry);
categoryRouter.delete('/:id', deleteCategory);