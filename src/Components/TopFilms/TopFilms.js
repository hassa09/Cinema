import React, { useState, useEffect } from 'react'
import axios from '../Slides/axios'; 

function TopFilms({ title, fetchUrl, isLargeRow = true }) {
    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original";
     
    useEffect(() => {
        async function fetchData() {
           const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();

    }, [fetchUrl]);
    // console.log(movies);
    
    
    
    return (
        <div className="topfilms">
            <h2>{title}</h2>

            <div className='ListMovie'>
                {movies?.map((movie) => (
                    <img
                        key={movie.id}
                        // onClick={() => handleClick(movie)}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                            }`}
                        alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default TopFilms