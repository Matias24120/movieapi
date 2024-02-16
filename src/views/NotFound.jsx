import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/imgs/logo2.jpg';

function NotFound() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <img src={logo} alt="logo" className='mt-4 mb-4' style={{ width: '40%' }} />
      <div className="text-center">
        <h1 className="font-weight-bold text-danger mb-4">Page not found</h1>
        <p className="mb-4">
          If you'd like to find some movies {' '}
          <Link to="/" className="text-primary text-decoration-underline">
            Click here!
          </Link>
        </p>
        <p>
          <Link to="/" className="btn-back"><FontAwesomeIcon icon={faArrowLeft} /></Link>
        </p>
      </div>
    </div>
  );
}

export default NotFound;
