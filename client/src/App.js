import React, { useEffect, useState } from 'react'

const App = () => {
  const [data,setData]=useState('');
  useEffect(function fetchdata(){
    fetch("http://localhost:3000").then(res=>res.text())
    .then(res=>setData(res)).catch((err)=>console.log(err))
  },[]);
  return (
    <div>
      <h1>{data}</h1>
    </div>
  )
}

export default App