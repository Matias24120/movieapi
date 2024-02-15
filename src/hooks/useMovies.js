import { useState, useEffect } from 'react';

const useMovies = (page) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const cargarPeliculas = async () => {
      try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=en-US&page=${page}`);

        if (respuesta.ok) {
          const datos = await respuesta.json();
          setMovies(datos.results);
        } else {
          console.error('Error loading movies:', respuesta.status);
        }
      } catch (error) {
        console.error('Error loading movies:', error);
      }
    };

    cargarPeliculas();

  }, [page]);

  return movies;
};

export default useMovies;