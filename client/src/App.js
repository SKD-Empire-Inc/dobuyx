import React, { useEffect, useState } from 'react'

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
    </>
  )
}

export default App