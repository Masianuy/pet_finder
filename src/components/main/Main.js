import React from 'react';
import './main.scss';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <header>
      <div className='container'>
        <h1>
          Find Your New
          <br />
          Best Friend
        </h1>
        <Link to='/findpet' className='btn main-btn'>Get Started</Link>
      </div>
    </header>
  );
};

export default Main;
