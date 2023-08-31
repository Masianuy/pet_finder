import React from 'react';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import Choosing from '../components/choosing/Choosing';

function FindPet () {
  return (
    <div className='wrap'>
      <Nav />
      <Choosing />
      <Footer />
    </div>
  );
}

export default FindPet;
