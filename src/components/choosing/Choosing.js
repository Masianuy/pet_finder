import React from 'react';
import './choosing.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Choosing = (props) => {
  const { petsList: {pets} } = props;
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
            <Link to={`/findpet/:${pet.id}`} key={pet.id} className='card'>
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
            </Link>
          );
        })}
      </div>
    </section>
  );
};
const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps)(Choosing);;
