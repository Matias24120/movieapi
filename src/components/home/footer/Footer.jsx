import React from 'react';

const Footer = ({ page, setPage }) => {
  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div className="paginacion mt-4">
      <button id="btnAnterior" onClick={handlePrevPage}>Previous</button>
      <button id="btnSiguiente" onClick={handleNextPage}>Next</button>
    </div>
  );
};

export default Footer;