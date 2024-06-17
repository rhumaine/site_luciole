import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Nav from './components/Nav';

// Les pages
import Accueil from './components/Accueil';
import Miniature from './components/Miniature';
import Commission from './components/Commission';
import Emotes from './components/Emotes';
import LogoBanniere from './components/LogoBanniere';

import GlobalStyles from './styles/GlobalStyles';

function NavConditional() {
  const location = useLocation();

  // Liste des chemins où le composant Nav doit être affiché
  const navPaths = ['/miniature', '/commission', '/emotes', '/logoBanniere'];

  // Vérifie si le chemin actuel est dans la liste des chemins où afficher Nav
  const shouldDisplayNav = navPaths.includes(location.pathname);

  return shouldDisplayNav ? <Nav /> : null;
}



function App() {
  return (
    <Router>
      <GlobalStyles />
      <NavConditional />
      <Routes>
        <Route path="/" element={<Accueil/>} />
        <Route path="/miniature" element={<Miniature/>} />
        <Route path="/commission" element={<Commission/>} />
        <Route path="/emotes" element={<Emotes/>} />
        <Route path="/logobanniere" element={<LogoBanniere/>} />
      </Routes>
    </Router>
  );
}

export default App;
