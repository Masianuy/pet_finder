import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './petCard.scss';

function PetCard (props) {
  const location = useLocation();
  const pet = location.state;
  function count (num) {
    let fullYears = Number.parseFloat((num / 12).toFixed(1));
    return fullYears;
  }
  return (
    <section className='container'>
      <Link to='/findpet' className='go-back'>
        <span>« </span>Back to all pets
      </Link>
      <div className='pet-card'>
        <div className='left'>
          <h3>{pet.name}</h3>
          <p>
            Sex: <span>{pet.sex}</span>
          </p>
          <p>
            Full years: <span>{count(pet.age)}</span>
          </p>
          <p>
            Address:{' '}
            <span>
              {pet.city}, {pet.state}
            </span>
          </p>
        </div>
        <div className='right'>
          <img src={pet.image} alt={pet.name} />
        </div>
        <div className='full'>
          
        <button className='btn'>Take {pet.name} to home</button>
          <button className='btn'>I want to sponsore</button>
        </div>
      </div>
    </section>
  );
}

export default PetCard;
