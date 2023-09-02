import { Form, Formik } from 'formik';
import React from 'react';
import './volunteerForm.scss';
import Input from '../Input/Input';
import { volunteerSchema } from '../../validations';

function VolunteerForm () {
  const initialValues = {};
  const handleSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  };

  return (
    <div className='volunteer-form-wrap'>
      <div className='container'>
        <h3>Volunteer Application</h3>
        <p>
          Please fill out this online application if you are interested in
          volunteering or community service. You can click on submit at the
          bottom and it will come straight to us and a representative of the
          shelter will call you once we have received it. If you have trouble
          filling out the application online, you can always come on in to the
          shelter and fill one out.
        </p>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={volunteerSchema}
        >
          {formikProps => (
            <Form className='volunteer-form'>
              <div className='left'>
                <Input type='text' name='firstName' label='First Name' />
                <Input type='text' name='secondName' label='Second Name' />
                <Input type='text' name='phone' label='Your phone' />
              </div>
              <div className='right'>
                <Input type='email' name='email' label='Your email' />
                <Input type='text' name='region' label='Your region' />
                <Input type='text' name='city' label='Your city' />
              </div>
              <div className='age'>
                <span>Are you 18 years of age?</span>
                <Input type='radio' name='age' value='yes' label='Yes' />
                <Input type='radio' name='age' value='no' label='No' />
              </div>
              <div className='textarea'>
                <Input
                  type='text'
                  as='textarea'
                  rows='8'
                  name='body'
                  label='Tell us more about yourself or let us know if you have any questions'
                />
              </div>
              <div className='type-of-volunteer'>
                <span>Type of volunteer work you are interested in doing:</span>
                <Input
                  type='checkbox'
                  name='typeOfVolunteer'
                  label='Walk dogs'
                  value='Walk dogs'
                />
                <Input
                  type='checkbox'
                  name='typeOfVolunteer'
                  label='Cat Attendant'
                  value='Cat Attendant'
                />
                <Input
                  type='checkbox'
                  name='typeOfVolunteer'
                  label='Shelter Care'
                  value='Shelter Care'
                />
                <Input
                  type='checkbox'
                  name='typeOfVolunteer'
                  label='Transport animals to vet appointments'
                  value='Transport animals to vet appointments'
                />
                <Input
                  type='checkbox'
                  name='typeOfVolunteer'
                  label='Foster animals'
                  value='Foster animals'
                />
                <Input
                  type='checkbox'
                  name='typeOfVolunteer'
                  label='Events'
                  value='Events'
                />
                <Input
                  type='checkbox'
                  name='typeOfVolunteer'
                  label='Other'
                  value='Other'
                />
              </div>
              <button type='submit' className='btn volunteer-btn'>
                Become a volunteer
              </button>
            </Form>
          )}
        </Formik>
        <article className='thanks'>
          <div className='left'>
            <h5>What will I do as a volunteer at Animal House?</h5>
            <ul>
              <li>Walk and socialize with the dogs</li>
              <li>Bathe and groom dogs</li>
              <li>Spend quality 1-on-1 time with the animals to help socialize them and teach them tricks! (puppies, kittens & cats too)</li>
              <li>Spend time in the ‘Free Roam’ cat room to socialize, groom or otherwise, help make their lives more comfortable</li>
              <li>And more!</li>
            </ul>
          </div>
          <div className='right'>
          </div>
        </article>
      </div>
    </div>
  );
}

export default VolunteerForm;
