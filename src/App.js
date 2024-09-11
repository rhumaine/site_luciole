import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Nav from './components/Nav';

// Les pages
import Accueil from './components/Accueil';
import MiniatureContainer from './components/MiniatureContainer';
import Commission from './components/Commission';
import Portfolio from './components/Portfolio';
import Emotes from './components/sous_menu/Emotes';
import Badges from './components/sous_menu/Badges';
import Overlay from './components/sous_menu/Overlay';
import Logo from './components/sous_menu/Logo';
import Banniere from './components/sous_menu/Banniere';
import GlobalStyles from './styles/GlobalStyles';
import Visuels from './components/sous_menu/Visuels';
import Pointschaine from './components/sous_menu/Pointschaine';
import Panneau from './components/sous_menu/Panneau';

function NavConditional() {
  const location = useLocation();

  const navPaths = ['/', '/portfolio'];

  const shouldDisplayNav = !navPaths.includes(location.pathname);

  return shouldDisplayNav ? <Nav /> : null;
}

function App() {
  return (
    <Router>
      <GlobalStyles />
      <NavConditional />
      <Routes>
        <Route path="/" element={<Accueil/>} />
        <Route path="/miniature" element={<MiniatureContainer/>} />
        <Route path="/commission" element={<Commission/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/emotes" element={<Emotes/>} />
        <Route path="/badges" element={<Badges/>} />
        <Route path="/overlay" element={<Overlay/>} />
        <Route path="/visuels" element={<Visuels/>} />
        <Route path="/logo" element={<Logo/>} />
        <Route path="/banniere" element={<Banniere/>} />
        <Route path="/pointschaine" element={<Pointschaine/>} />
        <Route path="/panneau" element={<Panneau/>} />
      </Routes>
    </Router>
  );
}

export default App;
