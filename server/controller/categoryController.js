import category from '../models/category.js'

 export const createCateogry = async(req,res)=>{
    try {
        const {categoryName}=req.body;
        const categories =new category({categoryName});
        await categories.save();
        res.status(201).json(categories);
    } catch (error) {
        res.status(500).json({error:"Error creating cateogry"})
    }
};

export const getAllCateogry=async(req,res)=>{
    try {
        const cateogories=await category.find();
        res.status(200).json(cateogories);
    } catch (error) {
        res.status(500).json({error:"Error fetching cateogry"});
    }
};

export const deleteCategory=async(req,res)=>{
    try {
        const categories=await category.findByIdAndDelete(req.params.id);
    return res.status(200).json({message:"Category Deleted successfully"});
    } catch (error) {
        return res.status(500).json({error:"Error deleting Category"});
        
    }
};

