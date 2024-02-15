import { useState, useEffect } from 'react';

const useMoviesSecondColumn = (movieId) => {
  const [detailsExtended, setDetailsExtended] = useState(null);

  useEffect(() => {
    const fetchMovieDetailsExtended = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=192e0b9821564f26f52949758ea3c473&language=en-US&append_to_response=credits,release_dates,recommendations`);

        if (response.ok) {
          const data = await response.json();
          setDetailsExtended({
            id: data.id,
            languages: data.spoken_languages ? data.spoken_languages.map(language => language.name) : [],
            originCountry: data.production_countries ? data.production_countries.map(country => country.name) : [],
            genres: data.genres ? data.genres.map(genre => genre.name) : [],
            releaseDate: data.release_dates.results && data.release_dates.results.length > 0 && data.release_dates.results[0].release_dates && data.release_dates.results[0].release_dates.length > 0 ? data.release_dates.results.find(date => date.iso_3166_1 === "US")?.release_dates[0]?.release_date : null,
            duration: data.runtime,
            director: data.credits.crew && data.credits.crew.find(person => person.job === "Director")?.name,
            writer: data.credits.crew ? data.credits.crew.find(person => person.job === "Writer")?.name || "Unavailable" : "Unavailable",
            producers: data.credits.crew ? data.credits.crew.filter(person => person.job === "Producer").map(producer => producer.name) : [],
            budget: data.budget,
            revenue: data.revenue,
            synopsis: data.overview,
            productionCompanies: data.production_companies ? data.production_companies.map(company => company.name) : []
          });          
        } else {
          console.error('Error loading extended movie details:', response.status);
        }
      } catch (error) {
        console.error('Error loading extended movie details:', error);
      }
    };

    fetchMovieDetailsExtended();
  }, [movieId]);

  return detailsExtended;
};

export default useMoviesSecondColumn;