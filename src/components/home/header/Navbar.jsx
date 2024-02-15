import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo2 from '../../../assets/imgs/logo2.png';
import Filter from './Filter';

const Navbar = ({ setSearchedMovies }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = async (searchTerm) => {
        setSearchTerm(searchTerm);

        try {
            if (!searchTerm.trim()) {
                const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=en-US&page=1`);
                if (response.ok) {
                    const data = await response.json();
                    setSearchedMovies(data.results);
                } else {
                    console.error('Error en la respuesta del servidor');
                }
            } else {
                const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=192e0b9821564f26f52949758ea3c473&language=en-US&query=${searchTerm}`);
                if (response.ok) {
                    const data = await response.json();
                    setSearchedMovies(data.results);
                } else {
                    console.error('Error en la respuesta del servidor');
                }
            }
        } catch (error) {
            console.error('Error en la búsqueda de películas:', error);
        }
    };

    return (
        <nav style={{backgroundColor: '#241744'}} className="navbar navbar-expand-lg mb-4">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <a className="navbar-brand" href="/">
                    <img src={logo2} height="40px" width="40px" alt="logo" />
                </a>
                <div className="d-flex align-items-center"> 
                    <div className="input-group me-2">
                        <span className="input-group-text"><FontAwesomeIcon icon={faSearch} /></span>
                        <input className="form-control custom-search-input" type="search" placeholder="Search" aria-label="Search" value={searchTerm} onChange={(e) => handleInputChange(e.target.value)} />
                    </div>
                    <Filter /> 
                </div>
            </div>
        </nav>
    );
}

export default Navbar;