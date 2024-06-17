import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { useLocation } from 'react-router-dom';
import logo from '../img/logo_luciole.jpg';


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRotate = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px) rotate(-5deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotate(0deg);
  }
`;

const HeaderWrapper = styled.header``;

const TitleHeader = styled.h2`
  padding: 1rem;
  font-family: 'Fredoka One', cursive;
  text-align: center;
  color: #320F13;
  font-size: 1.875em;
  line-height: 1.75;
  font-weight: 800;
  text-transform: uppercase;
  margin-top: 50px;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
`;

const DivLogo = styled.div`
  width: 13.875rem;
  height: 13.5rem;
  border-radius: 1.3rem;
  border-color: #320F13;
  border-style: solid;
  border-width: 4px;
  margin: 20px auto;
  opacity: 0;
  animation: ${fadeInRotate} 1s ease-in-out forwards;
  animation-delay: 0.5s;
`;

const LogoLuciole = styled.img`
  height: 100% !important;
  object-fit: cover;
  object-position: center;
  width: 100% !important;
  border-radius: inherit !important;
  padding: 0.375rem;
`;

const Header = () => {

  const location = useLocation();

  // Détermine le titre en fonction de la route actuelle
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Accueil';
      case '/miniature':
        return 'Miniature';
      case '/commission':
        return 'Commission';
      case '/emotes':
        return 'Emotes';
      default:
        return '';
    }
  };


  const titleRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    const logoElement = logoRef.current;

    const handleScroll = () => {
      const titlePosition = titleElement.getBoundingClientRect().top;
      const logoPosition = logoElement.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;

      if (titlePosition < screenPosition) {
        titleElement.style.animationPlayState = 'running';
      }
      if (logoPosition < screenPosition) {
        logoElement.style.animationPlayState = 'running';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderWrapper>
      <TitleHeader ref={titleRef}>{getPageTitle()}</TitleHeader>
      <DivLogo ref={logoRef}>
        <LogoLuciole src={logo} />
      </DivLogo>
    </HeaderWrapper>
  );
};

export default Header;
