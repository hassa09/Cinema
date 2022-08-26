import React from 'react'
import TopFilms from './Components/TopFilms/TopFilms'
import Banner1 from './Components/Slides/Banner1'
import Movie from './Components/TopFilms/Movie'
import requests from './Components/Slides/MovieData'
// import AllFilms from './Components/AllFilms/Allfilms'



export const LandingPage = () => {
    
  return (
    <div className='landingpage'>
      <TopFilms />
      <Banner1 />
      {/* <AllFilms /> */}
     
      
  
          
    </div>
  )
}
