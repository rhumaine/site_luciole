import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import Header from './Header';
import ScrollToTop from './ScrollToTop';
import ChevronRight  from '../img/chevron_right.svg';

const SectionUltia = styled.div``;


const PortfolioWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 80%;
  justify-content: center;


  @media (max-width: 768px) { 
    width: 100%; 
  }
`;


const ProjectCardWrapper = styled.div`
  flex: 1 1 calc(50% - 1rem); 
  box-sizing: border-box;
  overflow: visible;

  &.large-image{
    flex: 0 0 100%;
  }
  @media (max-width: 991px) {
    flex: 1 1 100%; /* 1 image à 100% de la largeur pour les petites résolutions */
  }
`;

const ProjectCardContent = styled.div`
  position: relative;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease-in-out;
    display: block; /* Prevents space under the image */
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const Container = styled.section`
  width: 50%;
  margin: 0 auto;

  @media (max-width: 991px){
    width:90%;
  }
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


const ultiaCyberpunk = [  
  { id: 1, imageUrl: '../img/miniatures/ultia/cyberpunk/01.jpg' },
  { id: 2, imageUrl: '../img/miniatures/ultia/cyberpunk/02.jpg' },
  { id: 3, imageUrl: '../img/miniatures/ultia/cyberpunk/03.jpg' },
  { id: 4, imageUrl: '../img/miniatures/ultia/cyberpunk/04.jpg' },
  { id: 5, imageUrl: '../img/miniatures/ultia/cyberpunk/05.jpg' },
  { id: 6, imageUrl: '../img/miniatures/ultia/cyberpunk/06.jpg' },
  { id: 7, imageUrl: '../img/miniatures/ultia/cyberpunk/07.jpg' },
  { id: 8, imageUrl: '../img/miniatures/ultia/cyberpunk/08.jpg' },
  { id: 9, imageUrl: '../img/miniatures/ultia/cyberpunk/09.jpg' },
  { id: 10, imageUrl: '../img/miniatures/ultia/cyberpunk/10.jpg' },
  { id: 11, imageUrl: '../img/miniatures/ultia/cyberpunk/11.jpg' },
  { id: 12, imageUrl: '../img/miniatures/ultia/cyberpunk/12.jpg' },
  { id: 13, imageUrl: '../img/miniatures/ultia/cyberpunk/13.jpg' },
];

const ultiaIttakesTwo = [  
  { id: 1, imageUrl: '../img/miniatures/ultia/ittakestwo/01.png' },
  { id: 2, imageUrl: '../img/miniatures/ultia/ittakestwo/02.jpg' },
  { id: 3, imageUrl: '../img/miniatures/ultia/ittakestwo/03.png' },
  { id: 4, imageUrl: '../img/miniatures/ultia/ittakestwo/04.jpg' },
  { id: 5, imageUrl: '../img/miniatures/ultia/ittakestwo/05.jpg' },
  { id: 6, imageUrl: '../img/miniatures/ultia/ittakestwo/06.jpg' },
  { id: 7, imageUrl: '../img/miniatures/ultia/ittakestwo/07.jpg' }
];

const ultiaSpiritfarer = [  
  { id: 1, imageUrl: '../img/miniatures/ultia/spiritfarer/01.png' },
  { id: 2, imageUrl: '../img/miniatures/ultia/spiritfarer/02.png' },
  { id: 3, imageUrl: '../img/miniatures/ultia/spiritfarer/03.jpg' },
  { id: 4, imageUrl: '../img/miniatures/ultia/spiritfarer/04.png' },
  { id: 5, imageUrl: '../img/miniatures/ultia/spiritfarer/05.jpg' },
  { id: 6, imageUrl: '../img/miniatures/ultia/spiritfarer/06.jpg' },
  { id: 7, imageUrl: '../img/miniatures/ultia/spiritfarer/07.jpg' },
  { id: 8, imageUrl: '../img/miniatures/ultia/spiritfarer/08.jpg' },
  { id: 9, imageUrl: '../img/miniatures/ultia/spiritfarer/09.jpg' },
  { id: 10, imageUrl: '../img/miniatures/ultia/spiritfarer/10.jpg' },
  { id: 11, imageUrl: '../img/miniatures/ultia/spiritfarer/11.jpg' },
  { id: 12, imageUrl: '../img/miniatures/ultia/spiritfarer/12.jpg' },
  { id: 13, imageUrl: '../img/miniatures/ultia/spiritfarer/13.jpg' },
  { id: 14, imageUrl: '../img/miniatures/ultia/spiritfarer/14.jpg' }
];

const ultiaStardew = [  
  { id: 1, imageUrl: '../img/miniatures/ultia/stardewvalley/dfg_international.jpg' },
  { id: 2, imageUrl: '../img/miniatures/ultia/stardewvalley/04.jpg' },
  { id: 3, imageUrl: '../img/miniatures/ultia/stardewvalley/05.jpg' },
  { id: 4, imageUrl: '../img/miniatures/ultia/stardewvalley/06.jpg' },
  { id: 5, imageUrl: '../img/miniatures/ultia/stardewvalley/07.jpg' },
  { id: 6, imageUrl: '../img/miniatures/ultia/stardewvalley/08.jpg' },
  { id: 7, imageUrl: '../img/miniatures/ultia/stardewvalley/09.jpg' },
  { id: 8, imageUrl: '../img/miniatures/ultia/stardewvalley/10.jpg' },
  { id: 9, imageUrl: '../img/miniatures/ultia/stardewvalley/11.jpg' },
  { id: 10, imageUrl: '../img/miniatures/ultia/stardewvalley/12.jpg' },
  { id: 11, imageUrl: '../img/miniatures/ultia/stardewvalley/13.jpg' },
  { id: 12, imageUrl: '../img/miniatures/ultia/stardewvalley/14.jpg' },
  { id: 13, imageUrl: '../img/miniatures/ultia/stardewvalley/15.jpg' },
  { id: 14, imageUrl: '../img/miniatures/ultia/stardewvalley/16.jpg' }
];





const ultiaAutre = [
  { id: 1, imageUrl: '../img/miniatures/ultia/autres/mariage.png' },
  { id: 2, imageUrl: '../img/miniatures/ultia/autres/webtoon.png' },
  { id: 3, imageUrl: '../img/miniatures/ultia/autres/perdu_paris.jpg' },
  { id: 4, imageUrl: '../img/miniatures/ultia/autres/twitch_rivals.jpg' },
  { id: 5, imageUrl: '../img/miniatures/ultia/autres/big_city.jpg' },
  { id: 6, imageUrl: '../img/miniatures/ultia/autres/unboxing_test.jpg' },
  { id: 7, imageUrl: '../img/miniatures/ultia/autres/spiritcity.png' },
  { id: 8, imageUrl: '../img/miniatures/ultia/autres/indieworld.jpg' },
  { id: 9, imageUrl: '../img/miniatures/ultia/autres/picopark.jpg' },
  { id: 10, imageUrl: '../img/miniatures/ultia/autres/deconnexion.jpg' },
  { id: 11, imageUrl: '../img/miniatures/ultia/autres/pitchmeanindie.jpg' },
  { id: 12, imageUrl: '../img/miniatures/ultia/autres/openroad.png' },
  { id: 13, imageUrl: '../img/miniatures/ultia/autres/creation_entreprise.png' },
  { id: 14, imageUrl: '../img/miniatures/ultia/autres/live_diy.jpg' }
];



const Miniature = () => {

  return (
    <div>
      <Header />
      <SectionUltia>
        <Container>
          <h2 className='title-section'>Miniatures pour Ultia</h2>
          <ListUl>
            <ListItem><Icon/><StyledLink href="#cyberpunk">Cyberpunk</StyledLink></ListItem>
            <ListItem><Icon/><StyledLink href="#ittakestwo">It Takes Two</StyledLink></ListItem>
            <ListItem><Icon/><StyledLink href="#stardewvalley">Stardew Valley</StyledLink></ListItem>
            <ListItem><Icon/><StyledLink href="#spiritfarer">Spiritfarer</StyledLink></ListItem>
            <ListItem><Icon/><StyledLink href="#autres">Autres</StyledLink></ListItem>
          </ListUl>
        </Container>
        <h2 className='title-section' id="cyberpunk">Cyberpunk</h2>
        <PortfolioWrapper>
          {ultiaCyberpunk.map((project, index) => (
            <ProjectCardWrapper key={project.id}  className={index === 0 ? 'large-image' : ''}>
              <ProjectCardContent>
                <ProjectCard project={project} />
              </ProjectCardContent>
            </ProjectCardWrapper>
          ))}
        </PortfolioWrapper>

        <StyledHr></StyledHr>
        
        <h2 className='title-section' id="ittakestwo">It Takes Two</h2>
        <PortfolioWrapper>
          {ultiaIttakesTwo.map((project, index) => (
            <ProjectCardWrapper key={project.id}  className={index === 0 ? 'large-image' : ''}>
              <ProjectCardContent>
                <ProjectCard project={project} />
              </ProjectCardContent>
            </ProjectCardWrapper>
          ))}
        </PortfolioWrapper>

        <StyledHr></StyledHr>

        <h2 className='title-section' id="stardewvalley">Stardew Valley</h2>
        <PortfolioWrapper>
          {ultiaStardew.map((project, index) => (
            <ProjectCardWrapper key={project.id}>
              <ProjectCardContent>
                <ProjectCard project={project} />
              </ProjectCardContent>
            </ProjectCardWrapper>
          ))}
        </PortfolioWrapper>

        <StyledHr></StyledHr>

        <h2 className='title-section' id="spiritfarer">Spiritfarer</h2>
        <PortfolioWrapper>
          {ultiaSpiritfarer.map((project, index) => (
            <ProjectCardWrapper key={project.id}>
              <ProjectCardContent>
                <ProjectCard project={project} />
              </ProjectCardContent>
            </ProjectCardWrapper>
          ))}
        </PortfolioWrapper>

        <StyledHr></StyledHr>
      
        <h2 className='title-section' id="autres">Autres</h2>
        <PortfolioWrapper>
          {ultiaAutre.map((project) => (
            <ProjectCardWrapper key={project.id}>
              <ProjectCardContent>
                <ProjectCard project={project} />
              </ProjectCardContent>
            </ProjectCardWrapper>
          ))}
        </PortfolioWrapper>

      </SectionUltia>
      <ScrollToTop/>
    </div>
  );
};

export default Miniature;
