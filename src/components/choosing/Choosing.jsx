import React, { Component } from 'react';
import pets from '../../data';
import './choosing.scss';

function count(num) {
	let fullYears = Number.parseFloat((num / 12).toFixed(1));
	return fullYears;
}

class Choosing extends Component {
  render () {
    return (
      <section className="container">
        <h2>Available Pets</h2>
        <div className="choosing_list">
          {pets.map((item) => {
            return (
              <div key={item.id} className="card">
                <div className="card_img">
                    <img src={item.image} alt={item.name} width="411px" height="315px"/>
                </div>
                <div className="card_content">
                    <p className="card_name">{item.name}</p>
                    <div className="card_info">
                        <p className="card_info-age">{count(item.age)} years</p>
                        <p className="card_info-address">{item.city}, {item.state}</p>
                    </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    )
  }
}

export default Choosing;