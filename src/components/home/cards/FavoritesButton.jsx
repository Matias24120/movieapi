import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const FavoritesButton = ({ movieId }) => {
  const [liked, setLiked] = useState(localStorage.getItem('likedMovies') ? JSON.parse(localStorage.getItem('likedMovies')).includes(movieId) : false);
  const [expand, setExpand] = useState(false);

  const handleLikeToggle = () => {
    const storedLikes = localStorage.getItem('likedMovies');
    const parsedLikes = storedLikes ? JSON.parse(storedLikes) : [];
    const updatedLikedMovies = liked
      ? parsedLikes.filter(id => id !== movieId)
      : [...parsedLikes, movieId];
    setLiked(!liked);
    localStorage.setItem('likedMovies', JSON.stringify(updatedLikedMovies));

    if (!liked) {
      setExpand(true);
      setTimeout(() => {
        setExpand(false);
      }, 500); 
    }
  };

  const heartSpring = useSpring({
    transform: liked ? 'scale(1.2)' : 'scale(1)',
    color: liked ? 'red' : 'grey',
  });

  const expandSpring = useSpring({
    transform: expand ? 'scale(1.5)' : 'scale(1)',
  });

  return (
    <animated.span
      onClick={handleLikeToggle}
      style={{
        cursor: 'pointer',
        ...heartSpring,
        ...(expand && expandSpring),
      }}
    >
      <FontAwesomeIcon icon={faHeart} />
    </animated.span>
  );
};

export default FavoritesButton;