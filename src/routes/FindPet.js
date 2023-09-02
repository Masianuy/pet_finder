import React from 'react';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import Choosing from '../components/choosing/Choosing';
import VolunteerSection from '../components/VolunteerSection/VolunteerSection';

function FindPet () {
  return (
    <>
      <Nav />
      <div className='wrap'>
        <Choosing />
        <VolunteerSection />
        <Footer />
      </div>
    </>
  );
}
export default FindPet;
