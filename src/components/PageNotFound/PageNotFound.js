import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PageNotFound.scss';

function PageNotFound () {
  const navigate = useNavigate();
  const stepBack = () => {
    navigate(-1);
  };
  return (
    <div className='container'>
      <div className='wrap-page'>
      <h2>Page Not Found</h2>
      <Link to={stepBack()} className='btn btn-back'>
        Back
      </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
