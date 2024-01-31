import db from "../mysql.config/mysql.config";

export const getAllCategoty=async()=>{

    const [rows]=await db.query("SELECT * FROM category")
    return rows
}
export const getQuestionById=async(category_id:number,difficulty:number,numberQuestion:number)=>{
    const [result]= await db.query(
        `SELECT * FROM question JOIN category ON question.category_id=category.category_id  JOIN answer ON question.question_id=answer.question_id WHERE category.category_id=${category_id} AND question.level=${difficulty} `)
        
    return result
}