import React from 'react';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import VolunteerForm from '../components/VolunteerForm/VolunteerForm';

function VolunteerApplication () {
  return (
    <>
      <Nav />
      <div className='wrap'>
        <VolunteerForm />
        <Footer />
      </div>
    </>
  );
}

export default VolunteerApplication;
