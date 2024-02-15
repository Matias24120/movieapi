import { useState, useEffect } from 'react';

const useGenres = () => {
  const [genres, setGenres] = useState({});

  useEffect(() => {
    const cargarGeneros = async () => {
      try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=192e0b9821564f26f52949758ea3c473&language=en-US`);

        if (respuesta.ok) {
          const datos = await respuesta.json();
          const generos = datos.genres.reduce((acc, genre) => {
            acc[genre.id] = genre.name;
            return acc;
          }, {});
          setGenres(generos);
        } else {
          console.error('Error loading genres:', respuesta.status);
        }
      } catch (error) {
        console.error('Error loading genres:', error);
      }
    };

    cargarGeneros();
  }, []);

  return genres;
};

export default useGenres;