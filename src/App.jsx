import React, { useState, useEffect } from 'react'

function App() {
  const [data, setdata] = useState([])
  useEffect(() => {
    fetch("https://newsdata.io/api/1/latest?apikey=pub_33d7f2413dc34845a4e66f8d99ed8b2c&country=us&prioritydomain=top")
      .then((responsive) => responsive.json())
      .then((data) => setdata(data))
      .catch((error) => error("error in api", error))

  }, [])


  // let post = {
  //   article_id: 1,
  //   title: "Sample Post Title"
  // }
  return (
    <>

      <div id="allposts" className=' bg-white p-6 text-blue-500 ' >
        <h1 className='newzapp' >News App</h1>
        <h2 className='latestnewz'>Latest News</h2>
        <div className="post">

          {
            data.results ? data.results.map((posts, index) => (
              <div key={index} className='post-detail' >
                {/* <h2>id:{posts.article_id}</h2> */}
                <h1>{posts.title}</h1>
                {
                  posts.description && <p>{posts.description}</p>
                }
                {
                  posts.image_url && <img src={posts.image_url} alt={posts.title} className='img  rounded-full' />

                }
                <br />
                {
                  posts.link && <a href={posts.link}>Read More</a>
                }
                

                

              </div>
              
            )) : (
              <div>

                <p>loading...</p>
                
              </div>

            )}


        </div>
      </div>
    </>
  )
}

export default App;