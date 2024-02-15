import { useState, useEffect } from 'react';

const useProductionCrew = (movieId) => {
  const [productionCrew, setProductionCrew] = useState([]);

  useEffect(() => {
    const fetchProductionCrew = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=192e0b9821564f26f52949758ea3c473&language=en-US`);
        
        if (response.ok) {
          const data = await response.json();
          setProductionCrew(data.crew);
        } else {
          console.error('Error fetching production crew:', response.status);
        }
      } catch (error) {
        console.error('Error fetching production crew:', error);
      }
    };

    fetchProductionCrew();
  }, [movieId]);

  return productionCrew;
};

export default useProductionCrew;