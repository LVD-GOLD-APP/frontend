'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
export const SliderTop = () => {
  return (
    <Swiper
      className='h-full w-full bg-[#EDEDED]'
      slidesPerView={1}
      modules={[Autoplay]}
      effect="fade"
      direction='vertical'
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide >
        <div className='flex items-center justify-center h-full w-full'>a</div>
      </SwiperSlide>
      <SwiperSlide >
        <div className='flex items-center justify-center h-full w-full'>b</div>
      </SwiperSlide>
      <SwiperSlide >
        <div className='flex items-center justify-center h-full w-full'>c</div>
      </SwiperSlide>
    </Swiper>
  )
}