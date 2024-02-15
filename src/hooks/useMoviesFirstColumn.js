import { useState, useEffect } from 'react';

const useMoviesFirstColumn = (movieId) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=192e0b9821564f26f52949758ea3c473&language=en-US`);
        
        if (response.ok) {
          const movieData = await response.json();
          setMovieDetails({
            title: movieData.title || '',
            posterPath: movieData.poster_path || '',
            rating: movieData.vote_average || 0
          });
        } else {
          console.error('Error fetching movie details:', response.status);
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return movieDetails;
};

export default useMoviesFirstColumn;