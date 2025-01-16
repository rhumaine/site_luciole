import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import ScrollToTop from './ScrollToTop';
import ChevronRight from '../img/chevron_right.svg';

const Section = styled.div``;

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
    flex: 1 1 100%;
  }
`;

const ProjectCardContent = styled.div`
  position: relative;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease-in-out;
    display: block;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const Container = styled.section`
  width: 50%;
  margin: 0 auto;

  @media (max-width: 991px) {
    width: 90%;
  }
`;

const ListUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 30px auto;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  color: #000;

  & a:hover {
    color: #ed6171;
  }
`;

const StyledLink = styled.a`
  color: #320f13;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border-bottom-color 0.3s ease-in-out;
`;

const Icon = styled.span`
  margin-right: 10px;
  width: 24px;
  height: 24px;
  display: inline-block;
  vertical-align: middle;
  border-radius: 2rem;
  background-image: url(${ChevronRight});
  background-position: left 60%;
  background-repeat: no-repeat;
  background-size: contain;
`;

const StyledHr = styled.hr`
  width: 50%;
  margin: 80px auto;
  border: none;
  opacity: 0.8;

  &::before {
    content: '';
    display: block;
    width: 100%;
    border-top: dotted 5px #ff6a6a;
    height: 4px;
  }
`;

const CategorySection = React.memo(({ category }) => {
  const isOdd = category.data.length % 2 !== 0;

  return (
    <>
      <h2 className='title-section' id={category.id}>{category.title}</h2>
      <PortfolioWrapper>
        {category.data.map((project, index) => {
          const isFirstAndOdd = index === 0 && isOdd;

          return (
            <ProjectCardWrapper key={project.id} className={isFirstAndOdd ? 'large-image' : ''}>
              <ProjectCardContent>
                <ProjectCard project={project} />
              </ProjectCardContent>
            </ProjectCardWrapper>
          );
        })}
      </PortfolioWrapper>
    </>
  );
});

const Miniature = ({ person }) => {

  if (!person) {
    return null;
  }
  return (
    <div>
      <Section>
        <Container>
          <h2 className='title-section'>Miniatures pour {person.name}</h2>
          <ListUl>
            {person.categories.map(category => (
              <ListItem key={category.id}>
                <Icon />
                <StyledLink href={`#${category.id}`}>{category.title}</StyledLink>
              </ListItem>
            ))}
          </ListUl>
        </Container>

        {person.categories.map((category, index) => (
          <React.Fragment key={category.id}>
            <CategorySection category={category} />
            {index !== person.categories.length - 1 && <StyledHr />}
          </React.Fragment>
        ))}
      </Section>
      <ScrollToTop />
    </div>
  );
};

export default Miniature;
