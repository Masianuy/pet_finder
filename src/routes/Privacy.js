import React from 'react';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import PrivacyPolicy from '../components/privacyPolicy/PrivacyPolicy';

function Privacy () {
  return (
    <>
      <Nav />
      <div className='wrap'>
        <PrivacyPolicy />
        <Footer />
      </div>
    </>
  );
}

export default Privacy;
