import React, {useEffect, useRef, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';


const Ticker = (props) => {
  // const isShowHeader = useRef()
  // const scrollTop = useRef(0)

  // const handleScroll = () => {
  //   let currentScrollTop = window.pageYOffset
  //   if (scrollTop.current <= currentScrollTop) {
  //       isShowHeader.current.className = 'h-hide'
  //   } else {
  //       isShowHeader.current.className = 'h-show'
  //   }
  //   scrollTop.current = currentScrollTop
  // }

  // useEffect(() => {
  //   document.addEventListener('scroll', handleScroll, true)
  //   return () => {
  //       document.removeEventListener('scroll', handleScroll, true)
  //   }
  // }, [])

  //ref={isShowHeader}
  return (
    <div  className={'ticker ' + props.className}>
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={50}
        slidesPerView={'auto'}
        loop={true}
        freeMode={true}
        speed={10000}
        autoplay={{ 
          delay: 0,
          reverseDirection: props.reverse
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