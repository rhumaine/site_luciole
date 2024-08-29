import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../img/logo_luciole.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importer FontAwesomeIcon
import { faPaintbrush, faCheck, faEnvelope, faBagShopping } from '@fortawesome/free-solid-svg-icons'; // Importer les icônes utilisées


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

const ContainerLogo = styled.div`
  width: 21.875rem;
  height: 21.5rem;
  border-radius: 1.875rem;
  border-color: #320F13;
  border-style: solid;
  border-width: 4px;
  margin-left: 20px;
  opacity: 0;
  animation: ${fadeInRotate} 1s ease-in-out forwards;
  animation-delay: 0.5s;

  @media (max-width: 991px) {
    margin-left:0;
  }
`

const Logo = styled.img`
  height: 100% !important;
  object-fit: cover;
  object-position: center;
  width: 100% !important;
  border-radius: inherit !important;
  padding: 0.375rem;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column; /* Aligner les éléments en colonne */
  margin-left: 80px;
  width:500px;
  text-align:center;
  line-height:70px;

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
  font-family: 'Arial', sans-serif;
  color: #320F13;
  font-size: 1.5rem;
  text-decoration: none;
  margin-top: 1rem; /* Espacement entre les éléments de navigation */
  border-radius: 3rem;
  border-color: #320F13;
  border-style: solid;
  border-width: 4px;
  font-weight:bold;
  transition: transform 0.5s ease, color 0.3s ease;
  

  &:hover {
    transform: scale(1.0775); /* Agrandissement au survol */
    border-color: #ED6171 !important;
    color: #ED6171 !important;
  }
`;

const Icon = styled.span`
  margin-right: 1rem; /* Espacement entre l'icône et le texte */
`;


const Accueil = () => {
  return (
    <Section>
      <Container>
        <ContainerLogo>
          <Logo src={logo} alt="Logo Luciole" />
        </ContainerLogo>
        <Nav>
          <NavItem href="/commission">
            <Icon><FontAwesomeIcon icon={faCheck} size="xl" /></Icon> Commission
          </NavItem>
          <NavItem href="/portfolio">
            <Icon><FontAwesomeIcon icon={faPaintbrush} /></Icon> Portfolio
          </NavItem>
          <NavItem href="mailto:luuciiole.pro@gmail.com">
            <Icon><FontAwesomeIcon icon={faEnvelope} /></Icon> Contact
          </NavItem>
          <NavItem href="https://www.etsy.com/fr/shop/LuuciioleCreations" target='_blank'>
            <Icon><FontAwesomeIcon icon={faBagShopping} /></Icon> Ma boutique Etsy
          </NavItem>
        </Nav>
      </Container>
    </Section>
  );
};

export default Accueil;
