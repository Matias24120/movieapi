import React from 'react';
import ModalCloseButton from '../button/ModalCloseButton';
import ModalHeader from '../header/ModalHeader';
import ModalDetails from '../details/ModalDetails';
import ModalCast from '../cast/ModalCast';
import ModalCrew from '../crew/ModalCrew';
import useMoviesSecondColumn from '../../../hooks/useMoviesSecondColumn';
import useMoviesThirdColumn from '../../../hooks/useMoviesThirdColumn';
import useMoviesFourthColumn from '../../../hooks/useMoviesFourthColumn';

const Modal = ({ movie, handleCloseModal }) => {
  const movieData = movie;
  const movieDetailsExtended = useMoviesSecondColumn(movie.id);
  const cast = useMoviesThirdColumn(movie.id);
  const crew = useMoviesFourthColumn(movie.id);
  const releaseDate = movieDetailsExtended ? new Date(movieDetailsExtended.releaseDate) : null;
  const formattedReleaseDate = releaseDate ? releaseDate.toISOString().split('T')[0] : '';

  return (
    <div>
      <div className="modal-backdrop" style={{ backgroundColor: 'rgba(67, 53, 102, 0.8)', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}></div>
      <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
        <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
          <div className="modal-content p-3 pt-0" style={{ maxHeight: '90vh'}}>
            <ModalCloseButton handleCloseModal={handleCloseModal} />
            {movieData && movieDetailsExtended &&
              <ModalHeader movieData={movieData} movieDetailsExtended={movieDetailsExtended} movie={movie} />
            }
            {movieData && movieDetailsExtended &&
              <ModalDetails movieDetailsExtended={movieDetailsExtended} formattedReleaseDate={formattedReleaseDate} />
            }
            {cast &&
             <ModalCast cast={cast} />
            }
            {crew &&
             <ModalCrew productionCrew={crew} />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
