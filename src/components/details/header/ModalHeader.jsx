import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import separator from '../../../helpers/formatHelper';
import useMoviesFirstColumn from '../../../hooks/useMoviesFirstColumn';
// import FavoritesButton from '../../home/cards/FavoritesButton';
// import WatchlistButton from '../../home/cards/WatchlistButton';

const ModalHeader = ({ movieData, movieDetailsExtended, movie }) => {
  const movieDetailsFirstColumn = useMoviesFirstColumn(movie.id);
  const rating = movieDetailsFirstColumn ? movieDetailsFirstColumn.rating.toFixed(1) : '';

  return (
      <div className="modal-body row">
        <div className="col-md-12 col-lg-5 d-flex justify-content-center">
          <img src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} alt={movie.title} className="img-fluid rounded" style= {{height: '100%', width: '80%'}}/>
        </div>
        <div className="col-md-12 col-lg-7 text-center">
          <h2 style={{ color: 'black' }} className='mt-3 mb-3'>{movieData.title} - {rating} <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} /></h2>
          <p style={{ color: 'black', fontSize: '1.3rem' }}>{movieDetailsExtended.director}</p>
          <p style={{ color: 'black', fontSize: '1.3rem' }}>{separator(movieDetailsExtended.genres)}</p>
          {/* <FavoritesButton /> &nbsp;&nbsp; */}
          {/* <WatchlistButton /> */}
          <h3 style={{ textAlign: 'left', color: 'black', paddingTop: '10px' }}>About</h3> 
          <p style={{ color: 'black', fontSize: '1.3rem', textAlign: 'left' }}>{movieDetailsExtended.synopsis}</p> 
        </div>
      </div>
  );
};

export default ModalHeader;