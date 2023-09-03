import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
import data from './../../Date.json';

function Footer () {
  const {
    email,
    phone,
    location: { country, city, address },
  } = data;
  return (
    <footer>
      <div className='container footer_top'>
        <div className='location'>
          <p>{address}</p>
          <p>
            {city}, {country}
          </p>
        </div>
        <div className='info'>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
      </div>
      <div className='container footer_bottom'>
        <Link to='/privacy-policy' className='privacy_policy'>
          Повідомлення про приватність
        </Link>
        <p>© Pet finder firm 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
