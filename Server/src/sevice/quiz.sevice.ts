import db from "../mysql.config/mysql.config";

export const getAllCategoty=async()=>{

    const [rows]=await db.query("SELECT * FROM category")
    return rows
}