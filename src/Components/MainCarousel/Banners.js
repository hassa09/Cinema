import React from 'react'
import { Icon } from '@iconify/react'; 
import { Link } from "react-router-dom"


    
const  MovieCards = ({ item: { id, cover, name, video } }) => {
  return (

         <div className='box'>
        <div className='coverImage'>
          <img src={cover} alt='' />
        </div>
        <div className='content flex'>
          <div className='details row'>
            <h1>{name}</h1>
            </div>
            <div className='cast'>
            </div>
            <button className='primary-btn'>
              <Icon icon="carbon:play-outline" color="white" width="63" height="63" />
            </button>
          </div>
          <div className='palyButton row'>
            <Link to={`/singlepage/${id}`}>
              <button>
                <div className='img'>
                  <img src='./images/play-button.png' alt='' />
                  <img src='./images/play.png' className='change' />
                </div>
                WATCH TRAILER
              </button>
            </Link>
          </div>
 
      </div>          
          




  )
}

export default MovieCards
