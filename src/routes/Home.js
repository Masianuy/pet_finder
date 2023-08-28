import React from 'react';
import Main from '../components/main/Main';
import Choosing from '../components/choosing/Choosing';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';

function Home () {
  return (
    <div className='wrap'>
      <Nav />
      <Main />
      <Choosing />
      <Footer />
    </div>
  );
}

export default Home;
