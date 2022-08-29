import React from 'react'
import BannerCards from './BannerCards'
import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/virtual';
import "swiper/css/navigation";


function Banner({ items }) {

    
  return (
    <>
      <div className="bannerConatainer">
        <Swiper
          loop
          freeMode
          spaceBetween={30}
          slidesPerView="auto"
          speed={800}
          scrollbar={{ draggable: true }}
          navigation={true} modules={[Navigation]} className="mySwiper"
         
        >
        {items?.map((item) => {
          return (
            <SwiperSlide
                key={item}>
            <>
              <BannerCards key={item.id} item={item} />
              
              </>
            </SwiperSlide>
            )
        })}
        </Swiper>
      </div>
    </> 
  
  )
}

export default Banner