import React, { Component } from 'react';
import pets from './../Date.json';
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
          {pets.map((pet) => {
            return (
              <div key={pet.id} className="card">
                <div className="card_img">
                    <img src={pet.image} alt={pet.name} width="411px" height="315px"/>
                </div>
                <div className="card_content">
                    <p className="card_name">{pet.name}</p>
                    <div className="card_info">
                        <p className="card_info-age">{count(pet.age)} years</p>
                        <p className="card_info-address">{pet.city}, {pet.state}</p>
                    </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    )
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     items: [],
  //     DataisLoaded: false
  //   };
  // }

  // componentDidMount() {
  //   fetch(
  //   "https://api.jsonbin.io/b/62498395d96a510f028fde92")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       this.setState({
  //         items: json.pets,
  //         DataisLoaded: true
  //       });
  //   })
  // }

  // render () {
  //   const { DataisLoaded, items } = this.state;
  //   if (!DataisLoaded) return <div><h2> Pleses wait some time.... </h2></div> ;
  //   return (
  //     <section className="container">
  //       <h2>Available Pets</h2>
  //       <div className="choosing_list">
  //         {items.map((item) => {
  //           return (
  //             <div key={item.id} className="card">
  //               <div className="card_img">
  //                   <img src={item.image} alt={item.name} width="411px" height="315px"/>
  //               </div>
  //               <div className="card_content">
  //                   <p className="card_name">{item.name}</p>
  //                   <div className="card_info">
  //                       <p className="card_info-age">{count(item.age)} years</p>
  //                       <p className="card_info-address">{item.city}, {item.state}</p>
  //                   </div>
  //               </div>
  //             </div>
  //           )
  //         })}
  //       </div>
  //     </section>
  //   )
  // }
}

export default Choosing;