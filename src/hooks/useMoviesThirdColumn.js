import { useState, useEffect } from 'react';

const useMoviesThirdColumn = (movieId) => {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const castResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=192e0b9821564f26f52949758ea3c473&language=en-US`);

        if (castResponse.ok) {
          const castData = await castResponse.json();
          setCast(castData.cast);
        } else {
          console.error('Error loading movie cast:', castResponse.status);
        }
      } catch (error) {
        console.error('Error loading movie cast:', error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return cast;
};

export default useMoviesThirdColumn;