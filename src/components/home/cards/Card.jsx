import React, { useState, useEffect } from 'react';
import '../../../assets/css/style.css';
import useMovies from '../../../hooks/useMovies'; 
import useMovieDurations from '../../../hooks/useMovieDurations'; 
import useGenres from '../../../hooks/useGenres'; 
import FavoritesButton from './FavoritesButton';
import WatchlistButton from './WatchlistButton';
import WatchedButton from './WatchedButton';
import Year from './Year';
import Footer from '../footer/Footer';
import Modal from '../../details/modal/Modal'; 

const Card = ({ searchedMovies }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const movieDurations = useMovieDurations(movies);
  const genres = useGenres(); 
  const [noResultsMessage, setNoResultsMessage] = useState('');
  const fetchedMovies = useMovies(page);

  useEffect(() => {
    setMovies(searchedMovies);
    if (searchedMovies.length === 0) {
      setNoResultsMessage('No results found');
    } else {
      setNoResultsMessage('');
    }
  }, [searchedMovies]);

  useEffect(() => {
    setMovies(fetchedMovies);
  }, [fetchedMovies]);

  const handleOpenModal = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div>
      <div className="container">
        <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
        {movies.map((movie, index) => (
          <div key={movie.id} className="col">
            <div className="card mb-4" style={{  borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)' }}>
              <div className="card-header d-flex justify-content-between align-items-center">
                <span>{movieDurations[index]?.duration} mins</span>
                <div>
                  <WatchedButton movieId={movie.id} /> &nbsp;
                  <FavoritesButton movieId={movie.id} />&nbsp;&nbsp;
                  <WatchlistButton movieId={movie.id} />
                </div>
              </div>
              <div onClick={() => handleOpenModal(movie)}> 
                  <div className='text-center p-3'>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="card-img-top img-fluid rounded" style={{ maxWidth: "150px", maxHeight: "200px" }}/>
                    <h6 className="card-title mt-2"><strong>{movie.title}</strong></h6>
                    <p className="card-genre mb-0" style={{ display: "flex", justifyContent: "center" }}>
                      <Year releaseDate={movie.release_date} /> &nbsp;- {genres[movie.genre_ids[0]]}
                    </p>
                  </div>
              </div>
            </div>
          </div>
        ))}
        </div>
        {noResultsMessage && <p className="text-danger text-center mt-4" style={{ fontSize: '1.2rem'}}>{noResultsMessage}</p>}
      </div>

      {selectedMovie && <Modal movie={selectedMovie} handleCloseModal={handleCloseModal} />}
      
      <Footer page={page} setPage={setPage}/>
    </div>
  );
};

export default Card;