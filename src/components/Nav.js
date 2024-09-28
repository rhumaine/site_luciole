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

    li > ul {
      display: flex;
      border-radius: 20px;
      position: relative;
      top:0;
      margin-top: -30px!important;
      flex-direction: column;
      background: transparent;
      left: 50px;
    }

    & li.open > ul {
      display: block;
    }

    li {
      position: relative;

      ul {
        display: none;
        padding: 0;
        list-style: none;

        li {
          padding: 10px;

          a {
            color: white;
          }
        }
      }
    }
  }

  @media (min-width: 650px){
    li:hover > ul {
      display: flex;
      flex-direction: column;
      left:-15px;
      margin-top: 20px;
      border-radius: 20px;
    }

    li {
    position: relative;

      ul {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: rgba(50, 15, 19, 0.8);
        padding: 0;
        list-style: none;

        li {
          padding: 10px;

          a {
            color: white;
          }
        }
      }
    }
  }
`;

const NavLink = styled(RouterNavLink)`
  padding: 20px 10px;
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

const Anchor = styled.a`
  padding: 20px 10px;
  color: white;
  text-decoration: none;
  font-size: 1em;
  font-weight: 400;

  &:hover {
    text-decoration: none;
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
  const [showLinks, setShowLinks] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  }

  const handleLinkClick = () => {
    setShowLinks(false);
    setOpenMenu(null);
  };

  const handleMenuClick = (menu, event) => {
    event.preventDefault();
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <Navbar className={showLinks ? 'showNav' : ''}>
      <UlNav>
        <li><NavLink to="/" end onClick={handleLinkClick}>Accueil</NavLink></li>
        <li><NavLink to="/miniature" onClick={handleLinkClick}>Miniatures</NavLink></li>
        <li><NavLink to="/commission" onClick={handleLinkClick}>Commissions</NavLink></li>
        <li className={openMenu === 'twitch' ? 'open' : ''}>
          <Anchor href="/" onClick={(e) => handleMenuClick('twitch', e)}>Twitch</Anchor>
          <ul>
            <li><NavLink to="/badges" onClick={handleLinkClick}>Badges</NavLink></li>
            <li><NavLink to="/emotes" onClick={handleLinkClick}>Emotes</NavLink></li>
            <li><NavLink to="/pointschaine" onClick={handleLinkClick}>Points de chaîne</NavLink></li>
            <li><NavLink to="/panneau" onClick={handleLinkClick}>Panneaux</NavLink></li>
            <li><NavLink to="/visuels" onClick={handleLinkClick}>Visuels</NavLink></li>
          </ul>
        </li>
        <li className={openMenu === 'da' ? 'open' : ''}>
          <Anchor href="/" onClick={(e) => handleMenuClick('da', e)}>D.A</Anchor>
          <ul>
            <li><NavLink to="/logo" onClick={handleLinkClick}>Logo</NavLink></li>
            <li><NavLink to="/banniere" onClick={handleLinkClick}>Bannière</NavLink></li>
          </ul>
        </li>
        <li><NavLink to="mailto:luuciiole.pro@gmail.com" onClick={handleLinkClick}>Contact</NavLink></li>
      </UlNav>
      <ButtonNavBar onClick={handleShowLinks}>
        <SpanBurger></SpanBurger>
      </ButtonNavBar>
    </Navbar>
  );
}

export default Nav;