import React from 'react'
import './volunteerSection.scss'
import { Link } from 'react-router-dom'

function VolunteerSection() {
  return (
    <section className='volunteer'>
      <div className='container'>
        <h3>Volunteer To Help Our Pets Start New Lives</h3>
        <p>As a non-profit, we rely on people like you to help us rescue our pets and prepare them for their new homes. Join the Animal House community.</p>
        <Link to='/volunteer-application' className='btn btn-volunteer'>Explore Ways to Volunteer</Link>
      </div>
    </section>
  )
}

export default VolunteerSection