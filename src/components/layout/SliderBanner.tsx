'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import SanPhamMoiNhatMobile from '@/assets/Banner-San-pham-moi-nhat-Mobile.jpg'
// import SanPhamMoiNhatPc from '@/assets/Banner-San-pham-moi-nhat-PC.jpg'
import TopSanPhamYeuThichMobile from '@/assets/Banner-Top-san-pham-yeu-thich-Mobile.jpg'
// import TopSanPhamYeuThichPc from '@/assets/Banner-Top-san-pham-yeu-thich-PC.jpg'
import Image from 'next/image';


export const SliderBanner = () => {
  return (
    <Swiper
      className='h-full w-full bg-[#EDEDED]'
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide >
        <Image className='h-full' src={SanPhamMoiNhatMobile} alt="" />
      </SwiperSlide>
      <SwiperSlide >
        <Image className='h-full' src={TopSanPhamYeuThichMobile} alt="" />
      </SwiperSlide>
    </Swiper>
  )
}