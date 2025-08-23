import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false); 

  const cardsPerPage = 5; 

  useEffect(() => {
    setLoading(true);
    fetch(`https://newsdata.io/api/1/latest?apikey=pub_33d7f2413dc34845a4e66f8d99ed8b2c&country=us&prioritydomain=top`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.results?.slice(indexOfFirstCard, indexOfLastCard);
  const nextPage = () => {
    if (currentPage < Math.ceil(data.results?.length / cardsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div id="allposts" className="bg-white p-6 text-blue-500">
        <h1 className="newzapp">News App</h1>
        <h2 className="latestnewz">Latest News</h2>
        <div className="post">
          {loading ? (
            <div>Loading...</div>
          ) : (
            currentCards?.map((posts, index) => (
              <div key={index} className="post-detail">
                <h1>{posts.title}</h1>
                {posts.description && <p>{posts.description}</p>}
                {posts.image_url && <img src={posts.image_url} alt={posts.title} className="img rounded-full" />}
                <br />
                {posts.link && <a href={posts.article_id}>Read More</a>}
              </div>
            ))
          )}

          <br/>
          
          <div className="pagination">
            <button className="btn" onClick={prevPage} disabled={currentPage === 1}>
              Previous
            </button>
            <button
              className="btn"
              onClick={nextPage}
              disabled={currentPage === Math.ceil(data.results?.length / cardsPerPage)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
