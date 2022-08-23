import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper";
import './MainCarousel.scss'
import MovieCards from "./MovieCards";
import U from '../../Assets/images/U.png'
import MinionsHerod from '../../Assets/images/MinionsHerod.jpg'
import Nope from '../../Assets/images/Nope.jpg'


function MainCarousel() {

  return (
    <div className='mainC'>
      <Swiper
        navigation={true}
        freeMode={true}
        effect={"coverflow"}
        slidesPerView={"auto"}
        grabCursor={true}
        pagination={true}
        modules={[FreeMode]}
        className="mySwiper"
      >

        <SwiperSlide><img className="carouselCert" src={MinionsHerod} alt="U cinema age rating film certificate" /></SwiperSlide>
        <SwiperSlide><img className="carouselCert" src={Nope} alt="U cinema age rating film certificate" /></SwiperSlide>
        {/* <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}


      <div>
          {/* <MovieCards /> */}
          {/* {itemes.map((item) => (
            <MovieCards 
            key={item.id}={item}
          )} */}
        </div>
        

      {/* <h3 className="carouselFilm-title ">
        Minions: The Rise Of Gru
      </h3>
      <a className='bookBtn'>Book now</a>
      <span className="carousel__">
        <img className="carouselRating" src={U} alt="U cinema age rating film certificate" />
        Now showing at your local Vue
        </span> */}
        
      
      </Swiper>
    
    
    </div>
  )
}

export default MainCarousel;