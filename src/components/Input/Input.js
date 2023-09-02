import React from 'react';
import { ErrorMessage, Field } from 'formik';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './input.module.scss';

function Input (props) {
  const { name, label, children, as, ...restProps } = props;
  return (
    <div className={styles['input-wrap']}>
      <label htmlFor={name}>{label}</label>
      {as ? (
        <Field name={name} as={as} children={children} {...restProps} />
      ) : (
        <Field name={name}>
          {({ field, form, meta }) => {
            const classInput = cx(styles.input, {
              [styles.invalid]: meta.error && meta.touched,
            });
            return <input className={classInput} {...field} {...restProps} />
          }}
        </Field>
      )}
      <ErrorMessage name={name} component='p' className={styles['error-inputing']} />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Input;
