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
import './slider.scss';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Slider ({ petsList }) {
  const { pets } = petsList;
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay, EffectCards]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={true}
        autoplay
        effect={'cards'}
        loop={true}
        pagination={{ clickable: true,
        dynamicBullets: true }}
        scrollbar={{ draggable: true }}
        className={cx('slider', 'container')}
      >
        {pets.map(item => (
          <SwiperSlide className='slide' key={item.id}>
            <Link to={`/findpet/${item.id}`} state={item}>
              <p>{item.name}</p>
              <img src={item.image} alt={item.name} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
const mapStateToProps = state => state;
export default connect(mapStateToProps)(Slider);
