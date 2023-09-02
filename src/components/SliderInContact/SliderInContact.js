import React from 'react';
import Slider from '../Slider/Slider';
import './sliderInContact.scss';

function SliderInContact () {
  return (
    <div className='container slider-wrap'>
      <div className='slider-left'>
        <Slider />
      </div>
      <div className='slider-right'>
        <h3 className='title'>
          Here you can <span>find your four-legged</span> friend
        </h3>
        <p className='subtitle'>
          In the shelter, there will be friends for everyone - big, small,
          guards, companions, lazy and restless.
        </p>
      </div>
    </div>
  );
}

export default SliderInContact;
