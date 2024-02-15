import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Modal from '../details/modal/Modal'; 

const FilmsList = () => {
    const [watchedMovies, setWatchedMovies] = useState([]);
    const [moviesDetails, setMoviesDetails] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null); 

    useEffect(() => {
        const fetchWatched = async () => {
            try {
                const storedWatched = localStorage.getItem('watchedMovies');
                if (storedWatched) {
                    const parsedWatched = JSON.parse(storedWatched).filter(movieId => movieId !== null);
                    setWatchedMovies(parsedWatched);
                }
            } catch (error) {
                console.error('Error fetching watched movies:', error);
            }
        };

        fetchWatched();
    }, []);

    useEffect(() => {
        const fetchMoviesDetails = async () => {
            try {
                const allMoviesDetails = await Promise.all(watchedMovies.map(async (movieId) => {
                    try {
                        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=192e0b9821564f26f52949758ea3c473&language=en-US`);
                        if (response.ok) {
                            const movieData = await response.json();
                            return {
                                id: movieData.id,
                                title: movieData.title || '',
                                posterPath: movieData.poster_path || ''
                            };
                        } else {
                            console.error('Error fetching movie details:', response.status);
                            return null;
                        }
                    } catch (error) {
                        console.error('Error fetching movie details:', error);
                        return null;
                    }
                }));
                setMoviesDetails(allMoviesDetails.filter(movie => movie !== null));
            } catch (error) {
                console.error('Error fetching movies details:', error);
            }
        };

        if (watchedMovies.length > 0) {
            fetchMoviesDetails();
        }
    }, [watchedMovies]);

    const handleOpenModal = (movie) => {
        setSelectedMovie(movie);
    };

    const handleCloseModal = () => {
        setSelectedMovie(null);
    };

    return (
        <div className="text-center">
            <h2 style={{backgroundColor: '#241744', color: 'white', padding: '14px', marginBottom: '20px'}} >Films</h2>
            {moviesDetails.length > 0 ? (
                <ul style={{ listStyle: 'none', margin: '0', padding: '0'}}>
                    {moviesDetails.map(movie => (
                        <li key={movie.id} style={{ display: 'inline-block', margin: '5px'}}>
                            <img src={`https://image.tmdb.org/t/p/w92/${movie.posterPath}`} alt={movie.title} className='rounded' onClick={() => handleOpenModal(movie)} style={{ cursor: 'pointer' }} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ fontSize: '1.2rem'}}>No movies yet!</p>
            )}
            {selectedMovie && <Modal movie={selectedMovie} handleCloseModal={handleCloseModal} />}

            <div className='mt-4'>
                <Link to="/" className="btn-back"><FontAwesomeIcon icon={faArrowLeft} /></Link>
            </div>
        </div>
    );
}
  
export default FilmsList;