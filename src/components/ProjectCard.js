import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  width:49%;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image src={project.imageUrl} alt={project.title} />
      {/*
      
      <CardContent>
        Ceci est un commentaire à l'intérieur des balises JSX  <h3>{project.title}</h3>
       <p>{project.description}</p>
      </CardContent>

      */}
    </Card>
  );
};

export default ProjectCard;
