import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


interface Category{
    category_id:number,
    name:string

}
 export interface Data{
  numberQuestion:number,
  category_id:number,
  difficulty:number,
}
export default function StartGame() {
    const [listCAtegory, setListCAtegory] = React.useState<Category[]>([])
    const [flag,setflag]=React.useState<boolean>(false)
    const [data,setData]=React.useState<Data>({
        numberQuestion:0,
        category_id:0,
        difficulty:0
    })
async function getCategory() {
    try {
        const db=await axios.get("http://localhost:8080/api/v1/category/")
        setListCAtegory(db.data.data)
    } catch (error) {
        console.log(error);
        
    }
}
    useEffect(()=>{
        getCategory()
    },[flag])    

    const navigate=useNavigate()
    const callData=()=>{
        localStorage.setItem("data",JSON.stringify(data))
        navigate("/play")
    }
  return (
    <div className='bg-white w-[500px] h-[600px] m-auto p-10 pt-[80px]'>
        <h1 className='text-5xl font-bold mb-10'>SETUP QUIZ</h1>
        <label htmlFor="">Number Of Questions</label> <br />
        <select onChange={(e)=>{setData({...data,numberQuestion:Number(e.target.value)})}} name="" id="" className='w-full bg-[#ccc] mb-10'>
            <option value="3">10</option>
            <option value="3">5</option>
            <option value="3">3</option>
        </select>
        <label htmlFor="">Category</label> <br />
        <select onChange={(e)=>{setData({...data,category_id:Number(e.target.value)})}} name="" id="" className='w-full bg-[#ccc] mb-10'>
            <option value="">Choose</option>
            {listCAtegory.map((item,i)=>{
                return <option key={i} value={item.category_id}>{item.name}</option>
            })}
        </select>
        <label htmlFor="">Difficulty</label>
        <select onChange={(e)=>{setData({...data,difficulty:Number(e.target.value)})}} name="" id="" className='w-full bg-[#ccc] mb-10'>
            <option value="">Choose</option>
            <option value="1">EASY</option>
            <option value="2">NORMAL</option>
            <option value="3">HARD</option>
        </select>
        <button onClick={callData} className='w-full h-[50px] bg-yellow-600'>Start</button>
    </div>
  )
}
