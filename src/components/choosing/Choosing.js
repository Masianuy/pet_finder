import React from 'react';
import data from '../../Date.json';
import './choosing.scss';

const Choosing = () => {
  const { pets } = data;
  function count (num) {
    let fullYears = Number.parseFloat((num / 12).toFixed(1));
    return fullYears;
  }
  return (
    <section className='container'>
      <h2>Available Pets</h2>
      <div className='choosing_list'>
        {pets.map(pet => {
          return (
            <div key={pet.id} className='card'>
              <div className='card_img'>
                <img
                  src={pet.image}
                  alt={pet.name}
                  width='411px'
                  height='315px'
                />
              </div>
              <div className='card_content'>
                <p className='card_name'>{pet.name}</p>
                <div className='card_info'>
                  <p className='card_info-age'>{count(pet.age)} years</p>
                  <p className='card_info-address'>
                    {pet.city}, {pet.state}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Choosing;
