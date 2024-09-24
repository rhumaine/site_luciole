import React from 'react';
import styled from 'styled-components';
import ChevronRight  from '../img/chevron_right.svg';
import Header from './Header';
import ScrollToTop from './ScrollToTop';

import commissionMiniature from '../img/portfolio/miniature.jpg';
import commissionEmotes from '../img/portfolio/emotes.png';
import commissionBadges from '../img/portfolio/badges.png';
import commissionPointChaine from '../img/portfolio/pointchaine.png';
import commissionOverlay from '../img/portfolio/overlay.gif';
import commissionPlanning from '../img/portfolio/planning.jpg';
import commissionVisuels1 from '../img/portfolio/visuel2.png';
import commissionLogo from '../img/portfolio/logo.jpg';
import commissionBanniere from '../img/portfolio/banniere.jpg';
import commissionPanneau from '../img/portfolio/panneaux_site.png';

const Container = styled.section`
  width: 50%;
  margin: 0 auto;

  @media (max-width: 991px){
    width:90%;
  }
`;

const ContainerGif = styled.section`
  width: 75%;
  margin: 0 auto;

  @media (max-width: 991px){
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
  color:#320F13;
  
  & a:hover{
    color: #ED6171;
  }
`;

const StyledLink = styled.a`
  color: #320F13;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border-bottom-color 0.3s ease-in-out;
`;

const Icon = styled.span`
  margin-right: 10px;
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

const StyledHr = styled.hr`
  width:50%;
  margin:80px auto;
  border:none;
  opacity:0.8;

  &::before {
    content: '';
    display: block;
    width: 100%;
    border-top: dotted 5px #ff6a6a;
    height: 4px;
  }
` 
const StyledTitle = styled.p `
  text-align: center;
  color: #320F13;
  font-family: 'Fredoka', sans-serif;
  font-size: 1.5em;
  line-height: 1.75;
  font-weight: 400;
`

const Image = styled.img`
  display:block;
  width: 80%;
  margin:0 auto;
  margin-bottom:50px;
  transition: transform 0.3s ease-in-out;

   &:hover {
    transform: scale(1.1);
  }
`;

const ImageOut = styled.img`
  display:block;
  width: 60%;
  margin:0 auto;
  margin-bottom:50px;
  transition: transform 0.3s ease-in-out;

   &:hover {
    transform: scale(1.1);
  }
  
  @media (max-width: 768px){
    width:90%;
  }
`;

const Commission = () => {
  return (
    <div>
      <Header />
      <Container>
        <TextU>Ce que je propose :</TextU>
        <ListUl>
          <ListItem><Icon/><StyledLink href="#miniature">Miniatures Youtube</StyledLink></ListItem>
          <ListItem><Icon/><StyledLink href="#badges">Badges Twitch</StyledLink></ListItem>
          <ListItem><Icon/><StyledLink href="#emotes">Émotes (textes ou illustrations)</StyledLink></ListItem>
          <ListItem><Icon/><StyledLink href="#pointchaine">Points de chaine</StyledLink></ListItem>
          <ListItem><Icon/><StyledLink href="#panneau">Panneaux</StyledLink></ListItem>
          <ListItem><Icon/><StyledLink href="#overlay">Overlays Twitch</StyledLink></ListItem>
          <ListItem><Icon/><StyledLink href="#visuels">Visuels</StyledLink></ListItem>
          <ListItem><Icon/><StyledLink href="#da">DA : Conception d’identité visuelle et graphique (logo, bannière ...)</StyledLink></ListItem>
        </ListUl>
        <TextU>Pour les commandes vous pouvez me contacter :</TextU>
        <ListUl>
          <ListItem><Icon/>Par DM Twitter : <StyledLink href="https://twitter.com/Luuciiole" target="_blank">@Luuciiole</StyledLink></ListItem>
          <ListItem><Icon/>Par mail :<StyledLink href="mailto:luuciiole.pro@gmail.com">luuciiole.pro@gmail.com</StyledLink></ListItem>
        </ListUl>
        <StyledHr></StyledHr>
        <StyledTitle><strong>COMMENT SE DÉROULE LA COMMANDE</strong></StyledTitle>
        <ListUl>
          <ListItem><Icon/>Avant toute commande, la totalité du paiement sera demandée avant que je commence votre projet, à titre de sécurité. Merci pour votre compréhension !</ListItem>
        </ListUl>
        <TextU>Pour les miniatures :</TextU>
        <ListUl>
          <ListItem><Icon/>1ère étape : je réalise un premier rendu en fonction de vos demandes.</ListItem>
          <ListItem><Icon/>2ème étape : je procède aux modifications en tenant compte de vos retours, si nécessaire.</ListItem>
        </ListUl>
        <TextU>Pour les émotes, badges, logos, bannières .. :</TextU>
        <ListUl>
          <ListItem><Icon/>1ère étape : je réalise un croquis en utilisant vos idées et en effectuant des recherches pour la composition. (Pour cette étape, plusieurs retours peuvent être effectués)</ListItem>
          <ListItem><Icon/>2ème étape : une fois le premier rendu validé, je créé la palette de couleurs. Il est impossible de modifier la composition à ce stade (des retours sont possibles sur les couleurs ou certains petits détails).</ListItem>
        </ListUl>
        <StyledHr></StyledHr>
        <StyledTitle><strong>Tarif</strong></StyledTitle>
        <TextU id="miniature">Miniature :</TextU>
        <ListUl>
          <ListItem><Icon/>Miniature : 15 à 25€ l'unité </ListItem>
        </ListUl>
        <Image src={commissionMiniature} alt="Exemple Miniature" />
        <TextU id="emotes">Émote :</TextU>
        <ListUl>
          <ListItem><Icon/>Émote statique : 18€ l'unité</ListItem>
          <ListItem><Icon/>pack de 3 émotes statique : 48€</ListItem>
          <ListItem><Icon/>pack de 5 émotes : 80€</ListItem>
          <ListItem><Icon/>+ de 5 émotes : 12€ chaque émote ajoutée</ListItem>
        </ListUl>
        <Image src={commissionEmotes} alt="Exemple Emotes" />
        <TextU id="pointchaine">Points de chaine</TextU>
        <ListUl>
          <ListItem><Icon/>8€ l'unité</ListItem>
          <ListItem><Icon/>Pack de 6 points de chaine : 38€</ListItem>
        </ListUl>
        <Image src={commissionPointChaine} alt="Exemple Point de chaine" />
        <TextU id="badges">Badge Twitch</TextU>
        <ListUl>
          <ListItem><Icon/>Badge avec changement de couleurs : 12€ le premier badge puis +5€ chaque badge supplémentaire</ListItem>
          <ListItem><Icon/>Badge différent : 12€ l'unité</ListItem>
          <ListItem><Icon/>Pack de 6 badges Twitch différents : 65€</ListItem>
        </ListUl>
        <Image src={commissionBadges} alt="Exemple Badges" />
        <TextU id="panneau">Panneau :</TextU>
        <ListUl>
          <ListItem><Icon/>10€ l'unité</ListItem>
          <ListItem><Icon/>4 panneaux : 35€</ListItem>  
          <ListItem><Icon/>+ de 5 panneaux : 8€ chaque panneau ajouté</ListItem>
        </ListUl>
        <Image src={commissionPanneau} alt="Exemple Panneaux" />
        <TextU id="overlay">Overlay Twitch :</TextU>
        <ListUl>
          <ListItem><Icon/>40€ l'overlay simple</ListItem>
          <ListItem><Icon/>60€ l'overlay animé</ListItem>
          <ListItem><Icon/>+ de 4 overlays : 30 € chaque overlay ajouté</ListItem>
        </ListUl>
        </Container>
      <ContainerGif>
        <ImageOut src={commissionOverlay} alt="Exemple Overlay" />
      </ContainerGif>
      <Container>
        <TextU id="visuels">Visuels</TextU>
        <ListUl>
          <ListItem><Icon/>Template de planning : 60€</ListItem>
          <ListItem><Icon/>Template de Mini planning (pour les RS ou en dessous du Stream par exemple) : 20€</ListItem> 
          <ListItem><Icon/>Update pour le.s planning.s : 15 à 25€ pour la mise à jour chaques semaines </ListItem> 

          <ListItem><Icon/>Visuel pour les réseaux sociaux : 10 à 50€ l'unité </ListItem> 
        </ListUl>
        <Image src={commissionPlanning} alt="Exemple Planning" />
        <Image src={commissionVisuels1} alt="Exemple Visuels1" />
        <TextU id="da">D.A</TextU>
        <ListUl>
          <ListItem><Icon/>création d'une DA complète : 10€ par heure</ListItem>
          <ListItem><Icon/>Bannière - Montage :25€</ListItem> 
          <ListItem><Icon/>Bannière - Illustration :40€</ListItem> 
        </ListUl>
        <Image src={commissionLogo} alt="Exemple Logo" />
        <Image src={commissionBanniere} alt="Exemple Banniere" />
      </Container>  
      <ScrollToTop/>
    </div>
  );
};

export default Commission;
