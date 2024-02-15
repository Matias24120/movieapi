import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Films from './views/Films';
import Favorites from './views/Favorites';
import Watchlist from './views/Watchlist';
import NotFound from './views/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Films />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;