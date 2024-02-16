import React, { useEffect, useState } from 'react'
import "./App.css"
const App = () => {
  const [data,setData]=useState([]);
  useEffect(function fetchdata(){
    fetch("http://localhost:3000/users").then(res=>res.json())
    .then(res=>setData(res)).catch((err)=>console.log(err))
  },[]);
  return (
    <>
     {
      data.map(i=>{
         return <div >
      <h1 key={i.id}>{i.name}</h1>
      <p key={i.id}>{i.email}</p>
      
      </div>
      })
     }
     <div className='main'>
     <h1>CEO @ DoBuyX</h1>
     <img alt='selva' src='https://dobuyx.s3.eu-north-1.amazonaws.com/Selva.jpg'/>
     </div>
    </>
  )
}

export default App