import React, { useEffect } from 'react'
import { Data } from './StartGame'
import axios from 'axios'


export default function PlayGame() {
const data=JSON.parse(localStorage.getItem("data")||"")
const [listQuestion, setListQuestion] = React.useState<any>([])
const [flag,setflag]=React.useState<boolean>(false)
async function getQuestion() {
    try {
        const db= await axios.get(`http://localhost:8080/api/v1/question/${data.category_id}/${data.difficulty}/${data.numberQuestion}`)
        setListQuestion(db.data.data)
    } catch (error) {
        console.log(data);
    }
}
useEffect(()=>{
    getQuestion()
},[])
console.log(listQuestion);

  return (
    <div>PlayGame</div>
  )
}
