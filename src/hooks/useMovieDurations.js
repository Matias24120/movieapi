import { useState, useEffect } from 'react';

const useMovieDurations = (movies) => {
  const [movieDurations, setMovieDurations] = useState([]);

  useEffect(() => {
    const fetchDurations = async () => {
      try {
        const durations = await Promise.all(
          movies.map(async (movie) => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=192e0b9821564f26f52949758ea3c473&language=en-US`);
            if (response.ok) {
              const movieDetails = await response.json();
              return { id: movie.id, duration: movieDetails.runtime };
            } else {
              console.error('Error loading movie details:', response.status);
              return { id: movie.id, duration: null }; 
            }
          })
        );
        setMovieDurations(durations);
      } catch (error) {
        console.error('Error loading movie details:', error);
      }
    };

    fetchDurations();
  }, [movies]);

  return movieDurations;
};

export default useMovieDurations;