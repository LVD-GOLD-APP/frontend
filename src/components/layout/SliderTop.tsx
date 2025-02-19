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
        <div className='flex items-center justify-center h-full w-full text-sm font-semibold'>10 Ngày Đổi Trả (LiLi Đến Tận Nơi Nhận Hàng)</div>
      </SwiperSlide>
      <SwiperSlide >
        <div className='flex items-center justify-center h-full w-full text-sm font-semibold'>Mang Đến Cho Bạn Sản Phẩm Và Dịch Vụ Cao Cấp</div>
      </SwiperSlide>
      <SwiperSlide >
        <div className='flex items-center justify-center h-full w-full text-sm font-semibold'>Đặt Sự Hài Lòng Của Bạn Là Ưu Tiên Số 1</div>
      </SwiperSlide>
    </Swiper>
  )
}