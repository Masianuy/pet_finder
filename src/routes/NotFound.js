import React from 'react';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import PageNotFound from '../components/PageNotFound/PageNotFound';

function NotFound () {
  return (
    <>
      <Nav />
      <div className='wrap'>
        <PageNotFound />
        <Footer />
      </div>
    </>
  );
}

export default NotFound;
