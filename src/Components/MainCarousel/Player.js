import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import './Banner.scss'
import videojs from 'video.js'
import { homeData } from '../../Dummydata'

function Player({video,}) {
    const { id } = useParams()
    const [item, setItem] = useState(null)
    useEffect(() => {
    let item = homeData.find((item) => item.id === parseInt(id))
    if (item) {
      setItem(item)
        }
    }, [id])
  const [rec, setRec] = useState()
  return (
      <>
          <section>
              <video src={video} controls></video>
              <div className='para'>
              <h3>Date : {item.date}</h3>
              </div>
          </section>
          
    </>
  )
}

export default Player