import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Banner.scss'
import { Icon } from '@iconify/react';
import { useParams } from "react-router-dom"
import { homeData } from '../../Dummydata';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

 


function BannerCards({ item: { cover, name, Cast, video, date, certificate, playing, } }) {

  const { id } = useParams()
  const [item, setItem] = useState([])

  useEffect(() => {
    let item = homeData.find((item) => item.id === parseInt(id))
    if (item) {
      setItem(item)
    }
  }, [id])
  console.log(video)

  return (
    <>
      <div className="imageBox">
      <div className="sliderImages">
          {/* <img src={cover} alt='banner' className='Images1' /> */}
          
          <Video className='Images1' loop 
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            poster={cover}
            onCanPlayThrough={() => {
                // Do stuff
            }}><source src={ video }type="video/webm" />
              <track label="English" default />
            </Video>
          
        </div>
        <div className="certificat">
          
        
        <div className="filmInfoContainer">
          <h3 className='filmInfo'>{name}</h3>
          <p className='playing'>{playing}</p>
            <img src={certificate} alt=' ' className='certificate' />
              
          </div>

        </div>
      </div>
      
      </>
  )
}

export default BannerCards
