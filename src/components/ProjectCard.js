import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
`;


const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image src={project.imageUrl} alt={project.title} />
    </Card>
  );
};

export default ProjectCard;
