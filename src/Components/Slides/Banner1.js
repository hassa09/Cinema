import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import './Banner1.scss'
import requests from './MovieData';
import axios from 'axios'

const Banner1 = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.requestPopular);
      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1  )
        ]
      ) 
      return request;
      
    }

    fetchData();
  }, []);
  console.log(movie);

  return (
    <>
    <header className='Banner' style={{
      backgroundSize: "Cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundPosition: "center center",
      
      }}>
        {/* <div className="TextBanner">
          <div className="movieName"><h1 className='movie_Name'>Top Gun: Double Bill</h1></div> */}
          
          {/* <p className='Showing'>Now showing at your local Vue</p>

        </div> */}
        {/* <div className='icon_btn'>
          <button className='BannerBtn'><Icon icon="ant-design:play-circle-outlined" width="95" height="95"
          /></button>

          
          <button className='BookNow'>Book Now</button>
        
        </div> */}

        
      </header>
      <div className="bottom--shadow" />
    </>
  )
}

export default Banner1 