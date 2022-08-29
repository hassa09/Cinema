import React from 'react'
import TopFilms from './Components/TopFilms/TopFilms'
// import Banner1 from './Components/Slides/Banner1'
import Movie from './Components/TopFilms/Movie'
import requests from './Components/Slides/MovieData'
import AllFilms from './Components/AllFilms/Allfilms'
import '../src/Components/TopFilms/Movies.scss'
import Banner from './Components/MainCarousel/Banner'
import Banners from '../src/Components/MainCarousel/Banners'



export const LandingPage = () => {
    
  return (
    <div className='landingpage'>
  
      <Banners />
      {/* <Banner1 /> */}
     
      <TopFilms title="Top films" fetchUrl={requests.requestUpcoming} />
      <TopFilms title="Trending Now" fetchUrl={requests.requestTrending} />
      {/* <TopFilms title="Action Movies" fetchUrl={requests.requestPopular} /> */}
      {/* <TopFilms title="Comedy Movies" fetchUrl={requests.requestHorror} /> */}
      {/* <TopFilms title="Upcoming Movies" fetchUrl={requests.requestUpcoming} />
  
 
{/*       
   <AllFilms />
      */}

      <Movie />
     
     
      
  
          
    </div>
  )
}
