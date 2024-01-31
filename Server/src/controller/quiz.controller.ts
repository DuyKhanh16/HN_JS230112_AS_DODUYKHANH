import { Request, Response } from "express";
import { getAllCategoty, getQuestionById } from "../sevice/quiz.sevice";

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
export const getQuestion=async(req:Request,res:Response)=>{
    const {category_id,difficulty,numberQuestion}=req.params
    try {
        const result=await getQuestionById(Number(category_id),Number(difficulty),Number(numberQuestion))
        res.status(200).json({
            data:result,
            message:"success"
        })
    } catch (error) {
        console.log(error);
        
    }
    
}