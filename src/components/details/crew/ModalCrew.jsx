import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const ModalCrew = ({ productionCrew }) => {
  return (
    <div className="modal-body row">
      <h3 className='text-center' style={{ color: 'black' }}>Production Crew</h3>
      <ul style={{ listStyleType: 'none' }}>
        {productionCrew.map((member, index) => (
          <li className={index % 2 === 0 ? 'detail-item' : 'detail-item2'} key={`${member.name}-${member.job}`}>
            <FontAwesomeIcon icon={faUser} /> {member.name} - {member.job}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModalCrew;