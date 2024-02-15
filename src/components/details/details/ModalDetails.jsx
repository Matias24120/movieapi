import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faLanguage, faGlobe, faClock, faCalendarAlt, faVideo, faPen, faDollarSign, faChartLine, faTag, faBuilding, faUserTie } from '@fortawesome/free-solid-svg-icons';
import separator from '../../../helpers/formatHelper';

const ModalDetails = ({ movieDetailsExtended, formattedReleaseDate }) => {
  return (
    <div className="modal-body row">
      <h3 className='text-center' style={{ color: 'black' }}>Details</h3>
      <ul style={{ listStyleType: 'none' }}>
        <li className="detail-item" ><FontAwesomeIcon icon={faFilm} /> ID: {movieDetailsExtended.id}</li>
        <li className="detail-item2"><FontAwesomeIcon icon={faLanguage} /> Languages: {separator(movieDetailsExtended.languages)}</li>
        <li className="detail-item"><FontAwesomeIcon icon={faGlobe} /> Origin Country: {separator(movieDetailsExtended.originCountry)}</li>
        <li className="detail-item2"><FontAwesomeIcon icon={faTag} /> Genres: {separator(movieDetailsExtended.genres)}</li>
        <li className="detail-item"><FontAwesomeIcon icon={faCalendarAlt} /> Release Date: {formattedReleaseDate}</li>
        <li className="detail-item2"><FontAwesomeIcon icon={faClock} /> Duration: {movieDetailsExtended.duration} minutes</li>
        <li className="detail-item"><FontAwesomeIcon icon={faVideo} /> Director: {movieDetailsExtended.director}</li>
        <li className="detail-item2"><FontAwesomeIcon icon={faPen} /> Writer: {movieDetailsExtended.writer}</li>
        <li className="detail-item"><FontAwesomeIcon icon={faUserTie} /> Producer: {separator(movieDetailsExtended.producers)}</li>
        <li className="detail-item2"><FontAwesomeIcon icon={faDollarSign} /> Budget: ${movieDetailsExtended.budget}</li>
        <li className="detail-item"><FontAwesomeIcon icon={faChartLine} /> Revenue: ${movieDetailsExtended.revenue}</li>
        <li className="detail-item2"><FontAwesomeIcon icon={faBuilding} /> Production Companies: {separator(movieDetailsExtended.productionCompanies)}</li>
      </ul>
    </div>
  );
};

export default ModalDetails;