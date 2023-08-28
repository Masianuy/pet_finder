import React from 'react';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import { Link } from 'react-router-dom';

function Contact () {
  return (
    <div className='wrap'>
      <Nav />
      Contact
      <Link to='/dfg'>dfgdfgd</Link>
      <Footer />
    </div>
  );
}

export default Contact;
