import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import Header from './Header';

const SectionUltia = styled.div``;

const SectionRhurhu = styled(SectionUltia)``;

const PortfolioWrapperUltia = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 80%;
  justify-content: center;
`;

const PortfolioWrapperRhurhu = styled(PortfolioWrapperUltia)``;

const ProjectCardWrapper = styled.div`
  flex: 1 1 calc(50% - 1rem); 
  box-sizing: border-box;
  overflow: visible;

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

const projectsUltia = [
  { id: 1, imageUrl: '/img/miniatures/mariage.png' },
  { id: 2, imageUrl: '/img/miniatures/webtoon.png' },
  // Ajoutez d'autres projets ici
];

const projectsRhurhu = [
  { id: 1, imageUrl: '/img/miniatures/mariage.png' },
  { id: 2, imageUrl: '/img/miniatures/webtoon.png' },
  // Ajoutez d'autres projets ici
];

const Miniature = () => {
  const ultiaRef = useRef(null);
  const rhurhuRef = useRef(null);

  useEffect(() => {
    const ultiaElement = ultiaRef.current;
    const rhurhuElement = rhurhuRef.current;

    const handleScroll = () => {
      const ultiaPosition = ultiaElement.getBoundingClientRect().top;
      const rhurhuPosition = rhurhuElement.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;

      if (ultiaPosition < screenPosition) {
        ultiaElement.style.animationPlayState = 'running';
      }
      if (rhurhuPosition < screenPosition) {
        rhurhuElement.style.animationPlayState = 'running';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Header />
      <SectionUltia ref={ultiaRef}>
        <h2 className='title-section'>Miniatures pour Ultia</h2>
        <PortfolioWrapperUltia>
          {projectsUltia.map(project => (
            <ProjectCardWrapper key={project.id}>
              <ProjectCardContent>
                <ProjectCard project={project} />
              </ProjectCardContent>
            </ProjectCardWrapper>
          ))}
        </PortfolioWrapperUltia>
      </SectionUltia>

      <SectionRhurhu ref={rhurhuRef}>
      <h2 className='title-section'>Miniatures pour Rhurhu</h2>
        <PortfolioWrapperRhurhu>
          {projectsRhurhu.map(project => (
            <ProjectCardWrapper key={project.id}>
              <ProjectCardContent>
                <ProjectCard project={project} />
              </ProjectCardContent>
            </ProjectCardWrapper>
          ))}
        </PortfolioWrapperRhurhu>
      </SectionRhurhu>
    </div>
  );
};

export default Miniature;
