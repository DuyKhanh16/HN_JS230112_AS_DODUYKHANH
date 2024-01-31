 import { Request, Response, Router } from "express";
import { getCategoty, getQuestion } from "../controller/quiz.controller";

 const quizRoute=Router();
quizRoute.get("/category",getCategoty);
quizRoute.get("/question/:category_id/:difficulty/:numberQuestion",getQuestion);

 export default quizRoute