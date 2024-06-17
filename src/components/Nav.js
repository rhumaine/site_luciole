import React from 'react';
import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';


const Navbar = styled.nav`
    width: 60%;
    margin: 50px auto;
    padding: 1rem;
    background-color: rgba(50, 15, 19, 0.8);
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 1000;
    font-family: 'Fredoka', sans-serif;
    border-radius: 5rem;

    @media (max-width: 991px) {
      width:80%;
    } 
    @media (max-width: 768px) {
      width:90%;
    }

    @media (max-width: 650px) {
      width:90%;
    }
`;

const NavLink = styled(RouterNavLink)`
  color: white;
  text-decoration: none;
  font-size: 1em;
  font-weight: 400;
  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: #FD8686; /* Couleur différente pour le lien actif */
  }
`;

const Nav = () => {
  return (
    <Navbar>
      <NavLink to="/" end>Accueil</NavLink>
      <NavLink to="/miniature" >Miniatures</NavLink>
      <NavLink to="/commission" >Commission</NavLink>
      <NavLink to="/emotes">Emotes</NavLink>
      <NavLink to="/logoBanniere">Logo & Bannières</NavLink>
      <NavLink to="mailto:luciole.pro@outlook.fr">Contact</NavLink>
    </Navbar>
  );
};

export default Nav;
