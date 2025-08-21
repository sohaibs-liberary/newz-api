import React, { useState, useEffect } from 'react'

function App() {
  const [data , setdata] =useState([])
  useEffect(()=>{
    fetch("https://newsdata.io/api/1/latest?apikey=pub_33d7f2413dc34845a4e66f8d99ed8b2c&country=us&prioritydomain=top")
    .then((responsive)=> responsive.json())
    .then((data)=>setdata(data))
    .error((error)=>error("error in api",error))

  })

  let const {
    
  }
  return (
    <>
    <div >


    </div>
    </>
  )
}

export default App