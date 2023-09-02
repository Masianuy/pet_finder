import * as Yup from 'yup';

const regForPhone = /^\+?3?8?(0[\s-]?\d{2}[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2})$/;

export const schemaContact = Yup.object().shape({
  yourHelp: Yup.string()
    .required("This field is required"),
  firstName: Yup.string()
    .required("This field is required")
    .min(2, 'min 2 letters')
    .max(256, 'This field is required'),
  email: Yup.string()
    .required("This field is required")
    .email('Еmail was inputing wrong'),
  phone: Yup.string()
    .required("This field is required")
    .matches(regForPhone, 'Phone was inputing wrong'),
  body: Yup.string().min(10, 'min 10 letters'),
});

export const volunteerSchema = Yup.object().shape({
  
})