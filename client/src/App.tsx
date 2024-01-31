import React from 'react'
import StartGame from './components/StartGame'
import { Data } from './components/StartGame'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import PlayGame from './components/PlayGame'
export default function App() {
  // const [data, setData] = React.useState<Data>({
  //   numberQuestion: 0,
  //   category_id: 0,
  //   difficulty: 0
  // })
  // const callProps = (props: Data) => {
  //   setData(props)
  // }
  
  return (
    <div className='bg-[#ccc] h-[100vh] pt-[100px]'>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartGame  />} />
        <Route path='/play' element={<PlayGame  />} />
      </Routes>
     </BrowserRouter>
    </div>
  )
}
