import React from 'react';

const Year = ({ releaseDate }) => {
  const getYear = (dateString) => {
    const date = new Date(dateString);
    return date.getFullYear();
  };

  return (
    <span  className="card-year mb-0">{getYear(releaseDate)}</span >
  );
};

export default Year;