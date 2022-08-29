import React, { useState } from 'react'
import { homeData } from '../../Dummydata'
import  Banner  from './Banner'





function Banners() {
  const [items, setItems] = useState(homeData)  
  return (
    <>
   
      <section className='home'>
        <Banner items={ items} />

      </section>
      <div className="margin"> 
      </div>
      



    </>
  )
}

export default Banners




