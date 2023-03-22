import React, {useEffect, useRef, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';


const Ticker = (props) => {
  const [direction, setDirection] = useState(props.reverse);

  const scrollTop = useRef(0);

  const handleScroll = () => {
    let currentScrollTop = window.pageYOffset
    if (scrollTop.current <= currentScrollTop) {
      setDirection(props.reverse)
    } else {
      setDirection(!direction)
    }
    scrollTop.current = currentScrollTop
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, true)
    return () => {
        document.removeEventListener('scroll', handleScroll, true)
    }
  });


  return (
    <div className={'ticker ' + props.className}>
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={20}
        slidesPerView={'auto'}
        loop={true}
        freeMode={true}
        speed={10000}
        autoplay={{ 
          delay: 0,
          reverseDirection: direction
        }}
        breakpoints={{
          768: {
            spaceBetween: 30,
          },
          992: {
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide><span>{props.text}</span></SwiperSlide>
        <SwiperSlide><span>{props.text}</span></SwiperSlide>
        <SwiperSlide><span>{props.text}</span></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Ticker;