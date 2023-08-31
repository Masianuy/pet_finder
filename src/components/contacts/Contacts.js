import React from 'react';
import data from './../../Date.json';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { schemaContact } from '../../validations';
import Input from '../Input/Input';
import SliderInContacts from '../SliderInContacts/SliderInContacts';
import './contacts.scss';

function Contacts () {
  const {
    email,
    phone,
    location: { country, city, address },
  } = data;
  const initialValues = {
    yourHelp: '',
    firstName: '',
    email: '',
    phone: '',
    body: '',
  };
  const handleSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };
  return (
    <section className='contacts'>
      <h2 className='container'>Do you want to come to visit?</h2>
      <div className='container contacts-wrap'>
        <div className='contacts-left'>
          <h5>We are waiting for you on:</h5>
          <div className='location'>
            <p>{address}</p>
            <p>
              {city}, {country}
            </p>
          </div>
          <div className='info'>
            <p>{phone}</p>
            <Link to='mailto:pet_finder@gmail.com'>{email}</Link>
          </div>
        </div>
        <div className='contacts-right'></div>
      </div>
      <div className='container form-wrap'>
        <h3>Contact us</h3>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schemaContact}
        >
          {formikProps => (
            <Form className='form-contact'>
              <Input
                name='yourHelp'
                as='select'
                label='Choose how you want to help'
              >
                <option value='I want to give a house to a cat/dog'>
                  I want to give a house to a cat/dog
                </option>
                <option value='Financial care of the animal'>
                  Financial care of the animal
                </option>
                <option value='I want to become a volunteer'>
                  I want to become a volunteer
                </option>
                <option value='I want to become a partner'>
                  I want to become a partner
                </option>
              </Input>

              <Input type='text' name='firstName' label='Your name' />
              <Input type='text' name='phone' label='Your phone' />
              <Input type='email' name='email' label='Your email' />
              <Input
                type='text'
                as='textarea'
                rows='6'
                placeholder='Leave a comment'
                name='body'
                label='Your message'
              />
              <button
                className='btn btn-form'
                type='submit'
                disabled={!formikProps.isValid}
              >
                Send
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className='container slider-wrap'>
        <div className='slider-left'>
          <SliderInContacts />
        </div>
        <div className='slider-right'>
          <h3 className='title'>Here you can <span>find your four-legged</span> friend</h3>
          <p className='subtitle'>In the shelter, there will be friends for everyone - big, small, guards, companions, lazy and restless.</p>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
