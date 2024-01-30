
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import quizRoute from "./router/quiz.route";

const app=express()
 app.use(cors())
 app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
dotenv.config();

app.use("/api/v1",quizRoute)

app.listen(process.env.PORT,()=>console.log(`Server is running on port ${process.env.PORT}`))
