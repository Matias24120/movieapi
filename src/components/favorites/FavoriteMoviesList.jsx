import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Modal from '../details/modal/Modal'; 

const FavoriteMoviesList = () => {
    const [favoriteMovies, setFavoriteMovies] = useState([]);
    const [moviesDetails, setMoviesDetails] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null); 

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const storedFavorites = localStorage.getItem('likedMovies');
                if (storedFavorites) {
                    const parsedFavorites = JSON.parse(storedFavorites).filter(movieId => movieId !== null);
                    setFavoriteMovies(parsedFavorites);
                }
            } catch (error) {
                console.error('Error fetching favorites:', error);
            }
        };

        fetchFavorites();
    }, []);

    useEffect(() => {
        const fetchMoviesDetails = async () => {
            try {
                const allMoviesDetails = await Promise.all(favoriteMovies.map(async (movieId) => {
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

        if (favoriteMovies.length > 0) {
            fetchMoviesDetails();
        }
    }, [favoriteMovies]);

    const handleOpenModal = (movie) => {
        setSelectedMovie(movie);
    };

    const handleCloseModal = () => {
        setSelectedMovie(null);
    };

    return (
        <div className="text-center">
            <h2 style={{backgroundColor: '#241744', color: 'white', padding: '14px', marginBottom: '20px'}} >Favorites</h2>
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
  
export default FavoriteMoviesList;