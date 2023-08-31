import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  A11y,
  EffectCards,
  Autoplay,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import './sliderInContacts.scss';
import cx from 'classnames';
import photo from './../../img/dog-bg-mobile.jpeg';

function SliderInContacts () {
  return (
    <>
      {' '}
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay, EffectCards]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={true}
        // autoplay
        effect={'cards'}
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className={cx('slider', 'container')}
      >
        <SwiperSlide className='slide'>
          <p>Slide 1</p>
          <img src={photo} alt=''/>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <p>Slide 2</p>
          <img src={photo} alt=''/>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <p>Slide 3</p>
          <img src={photo} alt=''/>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <p>Slide 4</p>
          <img src={photo} alt=''/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SliderInContacts;
