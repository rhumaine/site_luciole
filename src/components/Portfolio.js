import React from 'react';
import styled, { keyframes } from 'styled-components';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importer FontAwesomeIcon
//import { faPaintbrush, faCheck, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Importer les icônes utilisées


// Styles
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

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 4rem 0;

  @media (max-width: 576px){
    height:auto;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align:center;
  gap:50px 20px;

  @media (max-width: 991px) {
    margin-left:0;
    opacity: 0;
    animation: ${fadeInRotate} 1s ease-in-out forwards;
    animation-delay: 0.5s;
  }

  @media (max-width: 991px){
    width:90%;
  }
`;

const NavItem = styled.a`
  width:25%;
  height:120px;
  line-height:120px;
  font-family: 'Arial', sans-serif;
  color: #72076A;
  font-size: 1.5rem;
  text-decoration: none;
  margin-top: 1rem; /* Espacement entre les éléments de navigation */
  border-radius: 3rem;
  border-color: #FFD5B6;
  border-style: solid;
  border-width: 4px;
  font-weight:bold;
  transition: transform 0.5s ease, color 0.3s ease;
  

  &:hover {
    transform: scale(1.0775); /* Agrandissement au survol */
    border-color: #FFD5B6 !important;
    color: #FFD5B6 !important;
  }

  @media (max-width: 991px){
    width:90%;
  }
`;



const Portfolio = () => {
  return (
    <Section>
      <Container>
        <Nav>
          <NavItem href="/miniature">
             Miniatures
          </NavItem>
          <NavItem href="/emotes">
             Twitch Emotes
          </NavItem>
          <NavItem href="/badges">
             Twitch Badges
          </NavItem>
          <NavItem href="/overlay">
             Twitch Overlay
          </NavItem>
          <NavItem href="/visuels">
             Twitch Visuels
          </NavItem>
          <NavItem href="/logo">
             D.A Logo
          </NavItem>
          <NavItem href="/banniere">
             D.A Bannières
          </NavItem>
        </Nav>
      </Container>
    </Section>
  );
};

export default Portfolio;
