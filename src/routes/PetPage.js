import React from 'react'
import Nav from '../components/nav/Nav'
import Footer from '../components/footer/Footer'
import PetCard from '../components/PetCard/PetCard'


function PetPage() {
  return (
    <>
      <Nav />
      <div className='wrap'>
        <PetCard />
        <Footer />
      </div>
    </>
  )
}

export default PetPage