import React from 'react';
import styled from 'styled-components';
import  ChevronRight  from '../img/chevron_right.svg';
import Header from './Header';

const Container = styled.section`
  width: 50%;
  margin: 0 auto;

  @media (max-width: 768px){
    width:90%;
  }
`;

const TextU = styled.u`
  display: block;
  text-align: center;
  color: #320F13;
  font-family: 'Fredoka', sans-serif;
  font-size: 1.6em;
  line-height: 1.75;
  font-weight: 400;
`;

const ListUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin:30px auto
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  font-size:1.5em;
  color:#320F13
`;

const StyledLink = styled.a`
  color: #320F13;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border-bottom-color 0.3s ease-in-out;
`;

const Icon = styled.span`
  margin-right: 10px;
  width: 24px; /* Ajustez la taille selon votre SVG */
  height: 24px; /* Ajustez la taille selon votre SVG */
  display: inline-block;
  vertical-align: middle;
  border-radius: 2rem;
  background-image: url(${ChevronRight});
  background-position: left 60%;
  background-repeat: no-repeat;
  background-size: contain;
  height: 1.546875rem;
  line-height: 1.546875rem;
  min-width: 0.9375rem;
`;

const Commission = () => {
  return (
    <div>
      <Header />
      <Container>
        <TextU>Ce que je propose :</TextU>
        <ListUl>
          <ListItem>
            <Icon/>
            Miniatures Youtube
          </ListItem>
          <ListItem>
            <Icon/>
            Badges Twitch
          </ListItem>
          <ListItem>
            <Icon/>
            Émotes (textes ou illustrations)
          </ListItem>
          <ListItem>
            <Icon/>
            Bannières Twitch
          </ListItem>
          <ListItem>
            <Icon/>
            Overlays Twitch
          </ListItem>
          <ListItem>
            <Icon/>
            Planning
          </ListItem>
          <ListItem>
            <Icon/>
            DA : Conception d’identité visuelle et graphique (logo, bannière ...)
          </ListItem>
        </ListUl>
        <TextU>Pour les commandes vous pouvez me contacter :</TextU>
        <ListUl>
          <ListItem>
            <Icon/>
            Par DM Twitter :
            <StyledLink href="https://twitter.com/Luuciiole" target="_blank">
              @Luuciiole
            </StyledLink>
          </ListItem>
          <ListItem>
            <Icon/>
            Par mail :
            <StyledLink href="mailto:luciole.pro@outlook.fr">
              luciole.pro@outlook.fr
            </StyledLink>
          </ListItem>
          {/* Ajoutez d'autres éléments de liste avec des icônes ici */}
        </ListUl>
      </Container>
    </div>
  );
};

export default Commission;
