import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const WatchedButton = ({ movieId }) => {
  const [watched, setWatched] = useState(localStorage.getItem('watchedMovies') ? JSON.parse(localStorage.getItem('watchedMovies')).includes(movieId) : false);
  const [expand, setExpand] = useState(false);

  const handleWatchedToggle = () => {
    const storedWatched = localStorage.getItem('watchedMovies');
    const parsedWatched = storedWatched ? JSON.parse(storedWatched) : [];
    const updatedWatchedMovies = watched
      ? parsedWatched.filter(id => id !== movieId)
      : [...parsedWatched, movieId];
    setWatched(!watched);
    localStorage.setItem('watchedMovies', JSON.stringify(updatedWatchedMovies));

    if (!watched) {
      setExpand(true);
      setTimeout(() => {
        setExpand(false);
      }, 500); 
    }
  };

  const eyeSpring = useSpring({
    transform: watched ? 'scale(1.2)' : 'scale(1)',
    color: watched ? 'green' : 'grey',
  });

  const expandSpring = useSpring({
    transform: expand ? 'scale(1.5)' : 'scale(1)',
  });

  return (
    <animated.span
      onClick={handleWatchedToggle}
      style={{
        cursor: 'pointer',
        ...eyeSpring,
        ...(expand && expandSpring),
      }}
    >
      <FontAwesomeIcon icon={faEye} />
    </animated.span>
  );
};

export default WatchedButton;