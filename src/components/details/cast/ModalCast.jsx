import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const ModalCast = ({ cast }) => {
  return (
    <div className="modal-body row">
      <h3 className='text-center' style={{ color: 'black' }}>Cast</h3>
      <ul style={{ listStyleType: 'none' }}>
        {cast.map((actor, index) => (
          <li className={index % 2 === 0 ? 'detail-item' : 'detail-item2'} key={actor.id}><FontAwesomeIcon icon={faUser} /> {actor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ModalCast;