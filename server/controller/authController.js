import auth from '../models/Auth.js'

 export const createAuth = async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        const newAuth =new auth({name,email,password});
        await newAuth.save();
        res.status(201).json(newAuth);
    } catch (error) {
        res.status(500).json({error:"Error creating Auth"})
    }
};

export const getAllAuth=async(req,res)=>{
    try {
        const auths=await auth.find();
        res.status(200).json(auths);
    } catch (error) {
        res.status(500).json({error:"Error fetching Auth"});
    }
};

export const deleteAuth=async(req,res)=>{
    try {
        const auths=await auth.findByIdAndDelete(req.params.id);
    return res.status(200).json({message:"Auth Deleted successfully"});
    } catch (error) {
        return res.status(500).json({error:"Error deleting Auth"});
        
    }
};

