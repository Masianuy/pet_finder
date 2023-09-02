import React from 'react';
import Nav from '../components/nav/Nav';
import History from '../components/History/History';
import Footer from '../components/footer/Footer';
import VolunteerSection from '../components/VolunteerSection/VolunteerSection';

function About () {
  return (
    <>
      <Nav />
      <div className='wrap'>
        <History />
        <VolunteerSection />
        <Footer />
      </div>
    </>
  );
}

export default About;
