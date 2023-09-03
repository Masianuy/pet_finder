import React from 'react';
import './history.scss';
import photo from './../../img/dog-bg-desktop.jpeg';
import SliderInContact from '../SliderInContact/SliderInContact';

function History () {
  return (
    <section className='history'>
      <div className='container'>
        <h1>
          <span>Sirius</span> is the place of animal rescue and help
        </h1>
        <p className='subtitle'>
          Our reliance is people who every day do their best to give homeless
          animals a new happy life
        </p>
      </div>
      <div className='container'>
        <div className='photo-wrap'>
          <img src={photo} alt='dog' />
        </div>
        <p className='photo-message'>These people are like little children who simply can not do without our supervision!</p>
      </div>
      <SliderInContact />
    </section>
  );
}

export default History;
