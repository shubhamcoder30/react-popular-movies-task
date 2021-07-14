import React, { useEffect, useState } from 'react';
import './style.css';
import Cards from './Cards';
import Header from './Header';
import { API_URL, api_key, img_url } from './Config.js';
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}?api_key=${api_key}&page=1`).then(result => {
      result.json().then(resp => {
        setData(resp.results);
      });
    });
  }, []);

  console.warn(data);
  {
    return (
      <>
        <Header />

        {data.map((movie, i) => (
          <Cards
            id={movie.id}
            original_title={movie.original_title}
            original_language={movie.original_language}
            overview={movie.overview}
            popularity={movie.popularity}
            poster_path={img_url + movie.poster_path}
            release_date={movie.release_date}
            title={movie.title}
            vote_average={movie.vote_average}
            vote_count={movie.vote_count}
          />
        ))}
      </>
    );
  }
}
export default App;
