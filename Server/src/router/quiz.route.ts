 import { Request, Response, Router } from "express";
import { getCategoty } from "../controller/quiz.controller";

 const quizRoute=Router();
quizRoute.get("/category",getCategoty);

 export default quizRoute