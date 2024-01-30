import { Request, Response } from "express";
import { getAllCategoty } from "../sevice/quiz.sevice";

export const getCategoty= async(req:Request,res:Response)=>{
    try {
        const resp=await getAllCategoty();
        res.status(200).json({
            data:resp,
            message:"success"
        })
    } catch (error) {
        console.log(error);
        
    }
}