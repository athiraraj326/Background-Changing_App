import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState("")
  const click = color =>{setColor(color)}
  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center' style={{height:'100vh',backgroundColor: `${color}`}}>        
        <h1 className='text-light'>Background Color Changer</h1>
        <div className='d-flex justify-content-evenly  w-50 m-5 p-5 bg-white rounded '>
          <button onClick={()=>click("blue")} className='border border-dark rounded-pill px-4 py-2' style={{background:'blue',color:'white'}}>Blue</button>
          <button onClick={()=>click("red")} className='border border-dark rounded-pill px-4 py-2' style={{background:'red',color:'white'}}>Red</button>
          <button onClick={()=>click("green")} className='border border-dark rounded-pill px-4 py-2' style={{background:'green',color:'white'}}>Green</button>
          <button onClick={()=>click("black")} className='border border-dark rounded-pill px-4 py-2' style={{background:'black',color:'white'}}>Black</button>
          <button onClick={()=>click("orange")} className='border border-dark rounded-pill px-4 py-2' style={{background:'orange',color:'white'}}>Orange</button>
        </div>
      </div>
    </>
  )
}

export default App
