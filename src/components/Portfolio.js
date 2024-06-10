import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const SectionUltia = styled.div`
  text-align: center;
  color: #72076A;
  font-family: 'Fredoka', sans-serif;
  font-size: 1.25em;
  line-height: 1.75;
  font-weight: 400;
`;

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

const PortfolioWrapperRhurhu = styled(PortfolioWrapperUltia)`
`;

const projectsUltia = [
  { id: 1, imageUrl: '/img/miniatures/mariage.png'},
  { id: 2, imageUrl: '/img/miniatures/webtoon.png'},
  // Ajoutez d'autres projets ici
];

const projectsRhurhu = [
  { id: 1, imageUrl: '/img/miniatures/mariage.png'},
  { id: 2, imageUrl: '/img/miniatures/webtoon.png'},
  // Ajoutez d'autres projets ici
];

const Portfolio = () => {
  return (
    <div>
      <SectionUltia>
        <h2>Miniatures pour Ultia</h2>
        <PortfolioWrapperUltia>
          {projectsUltia.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </PortfolioWrapperUltia>
      </SectionUltia>

      <SectionRhurhu>
      <h2>Miniatures pour Rhurhu</h2>
      <PortfolioWrapperRhurhu>
        {projectsRhurhu.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </PortfolioWrapperRhurhu>
      </SectionRhurhu>
  </div>
  );
};

export default Portfolio;