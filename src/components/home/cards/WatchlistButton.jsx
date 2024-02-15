import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const WatchlistButton = ({ movieId }) => {
  const [watchlisted, setWatchlisted] = useState(localStorage.getItem('watchlistedMovies') ? JSON.parse(localStorage.getItem('watchlistedMovies')).includes(movieId) : false);
  const [expand, setExpand] = useState(false);

  const handleWatchlistToggle = () => {
    const storedWatchlist = localStorage.getItem('watchlistedMovies');
    const parsedWatchlist = storedWatchlist ? JSON.parse(storedWatchlist) : [];
    const updatedWatchlistedMovies = watchlisted
      ? parsedWatchlist.filter(id => id !== movieId)
      : [...parsedWatchlist, movieId];
    setWatchlisted(!watchlisted);
    localStorage.setItem('watchlistedMovies', JSON.stringify(updatedWatchlistedMovies));

    if (!watchlisted) {
      setExpand(true);
      setTimeout(() => {
        setExpand(false);
      }, 500); 
    }
  };

  const starSpring = useSpring({
    transform: watchlisted ? 'scale(1.2)' : 'scale(1)',
    color: watchlisted ? 'yellow' : 'grey',
  });

  const expandSpring = useSpring({
    transform: expand ? 'scale(1.5)' : 'scale(1)',
  });

  return (
    <animated.span
      onClick={handleWatchlistToggle}
      style={{
        cursor: 'pointer',
        ...starSpring,
        ...(expand && expandSpring),
      }}
    >
      <FontAwesomeIcon icon={faBookmark} />
    </animated.span>
  );
};

export default WatchlistButton;