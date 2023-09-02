import React from 'react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './main.scss';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

const Main = () => {
  return (
    <header>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        slidesPerView={1}
        navigation={true}
        autoplay
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div className='slider slider_1'>
            <div className='container'>
              <h1>
                Find Your New
                <br />
                Best Friend
              </h1>
              <Link to='/findpet' className='btn main-btn'>
                Get Started
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slider slider_2'>
            <div className='container'>
              <h1>
                Make A
                <br />
                Monetary Donation
              </h1>
              <Link to='/contacts' className='btn main-btn'>
                Donate now
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slider slider_3'>
            <div className='container'>
              <h1>
                Help Us
                <br />
                Help Them
              </h1>
              <Link to='/volunteer-application' className='btn main-btn'>
                Become a Volunteer
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </header>
  );
};

export default Main;
