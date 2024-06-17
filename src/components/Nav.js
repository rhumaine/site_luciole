import React from 'react';
import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = styled.nav`
    margin: 50px auto;
    padding: 1rem;
    background-color: rgba(50, 15, 19, 0.8);
    color: white;
    z-index: 1000;
    font-family: 'Fredoka', sans-serif;
    border-radius: 5rem;

    @media (max-width: 649px){
      position: fixed;
      top: 0;
      right: 0;
      padding:0;
    }
`;

const UlNav = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style:none;
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: center;

   @media (max-width: 649px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      right: -100vw;
      bottom: 0;
      height:100vh;
      padding: 2rem;
      background: #000;
      border-radius:0;
      margin:0;
      visibility:hidden;
      transition: all .8s ease-out;

      .showNav &{
        right: 0;
        visibility:visible;
      }

      & li:after{
        content: "";
        display:block;
        margin: 0 auto;
        width: 3vw;
        height:1px;
        background:#fff;
      }

      & li:last-child:after{
        display:none;
      }
    }
`
const NavLink = styled(RouterNavLink)`
  padding: 10px;
  color: white;
  text-decoration: none;
  font-size: 1em;
  font-weight: 400;
  &:hover {
    text-decoration: none;
  }
  &.active {
    color: #FD8686; /* Couleur différente pour le lien actif */
  }

  @media (max-width: 649px) {
    display:block;
    padding:1.5rem;
    font-size: 5vw;

  }
`;

const ButtonNavBar = styled.button`
  display:block;
  height: 40px;
  background: transparent;
  border: 0;
  position:fixed;
  top:2rem;
  right:2rem;

  @media (min-width: 650px) {
     display:none;
  }
`;

const SpanBurger = styled.span`
  &, &:before, &:after{
    display:block;
    width:40px;
    height:3px;
    position:relative;
    border-radius:3px;
    background:#fff;
    transition: all .5s ease-in-out;
  }
  
  
  .showNav &{
    background:transparent;
  }

  &:before, &:after{
    content:"";
    position:absolute;
    left:0;
  }

  &:before{
    transform: translateY(-12px);
  }

  .showNav &:before{
    transform: rotate(45deg);
  }

  &:after{
    transform: translateY(12px);
  }

  .showNav &:after{
    transform: rotate(-45deg);
  }
`;

function Nav() {
  const [showLinks, setShowLinks] = useState(false)

  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }

  const handleLinkClick = () => {
    setShowLinks(false);
  };

  return (
    <Navbar className={ showLinks ? 'showNav' : ''}>
      <UlNav>
        <li><NavLink to="/" end onClick={handleLinkClick}>Accueil</NavLink></li>
        <li><NavLink to="/miniature" onClick={handleLinkClick}>Miniatures</NavLink></li>
        <li><NavLink to="/commission" onClick={handleLinkClick}>Commission</NavLink></li>
        <li><NavLink to="/emotes"onClick={handleLinkClick}>Emotes</NavLink></li>
        <li><NavLink to="/logoBanniere"onClick={handleLinkClick}>Logo & Bannières</NavLink></li>
        <li><NavLink to="mailto:luciole.pro@outlook.fr" onClick={handleLinkClick}>Contact</NavLink></li>
      </UlNav>
      <ButtonNavBar onClick={handleShowLinks}>
        <SpanBurger></SpanBurger>
      </ButtonNavBar>
    </Navbar>
  );
};

export default Nav;
