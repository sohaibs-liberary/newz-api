import React, { useState, useEffect } from 'react'

function App() {
  const [data, setdata] = useState([])
  useEffect(() => {
    fetch("https://newsdata.io/api/1/latest?apikey=pub_33d7f2413dc34845a4e66f8d99ed8b2c&country=us&prioritydomain=top")
      .then((responsive) => responsive.json())
      .then((data) => setdata(data))
      .catch((error) => error("error in api", error))

  }, [])


  let post = {
    article_id: 1,
    title: "Sample Post Title"
  }
  return (
    <>

      <div  className='bg-white p-6' >
        <h1>News App</h1>
        <h2 className='text-2xl font-bold'>Latest News</h2>
       
        {
          data.results ? data.results.map((posts , index)=>(
            <div key={index} >
              <h2>id:{posts.article_id}</h2>
              <p >title:{posts.title}</p>
            {
              posts.description && <p>description: {posts.description}</p>
            }
           {
               posts.image_url && <img src={posts.image_url} alt={posts.title} className='w-48 h-48 object-cover'/>
             }
             



            </div>
           )) : (
            <div>
              <p>loading...</p>
            </div>
          )
        }
      </div>
    </>
  )
}

export default App