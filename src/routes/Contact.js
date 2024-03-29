import React from 'react';
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import Contacts from '../components/contacts/Contacts';

function Contact () {
  return (
    <>
      <Nav />
      <div className='wrap'>
        <Contacts />
        <Footer />
      </div>
    </>
  );
}

export default Contact;
