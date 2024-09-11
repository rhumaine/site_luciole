import React from 'react';
import parse from 'html-react-parser';
import styled from 'styled-components';
import ChevronRight  from '../img/chevron_right.svg';

const BASE_URL = process.env.REACT_APP_BACKEND_URL || 'http://127.0.0.1:8000/';

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


// Fonction pour remplacer les balises HTML
const replaceTags = (node ,index = 0) => {
  if (node.type === 'tag') {
    switch (node.name) {
      case 'ul':
        return (
          <ListUl key={index}>
            {node.children.map((child, idx) => (
              <React.Fragment key={idx}>{replaceTags(child)}</React.Fragment>
            ))}
          </ListUl>
        );
      case 'li':
        return (
          <ListItem key={index}>
            <Icon />
            {node.children.map((child, idx) => (
              <React.Fragment key={idx}>{replaceTags(child)}</React.Fragment>
            ))}
          </ListItem>
        );
      case 'a':
        return (
          <StyledLink href={node.attribs.href} key={index}>
            {node.children.map((child, idx) => (
              <React.Fragment key={idx}>{replaceTags(child)}</React.Fragment>
            ))}
          </StyledLink>
        );
      case 'hr':
        return <StyledHr key={index} />;
      case 'u':
        return <TextU key={index}>{node.children.map((child, idx) => replaceTags(child, idx))}</TextU>;
      case 'h2':
        return <StyledTitle key={index}><strong>{node.children.map((child, idx) => replaceTags(child, idx))}</strong></StyledTitle>
      case 'img':
         // Générer le chemin complet pour l'image
        const imgSrc = node.attribs.src.startsWith('http')
        ? node.attribs.src
        : `${BASE_URL}${node.attribs.src}`;
        return <Image src={imgSrc} alt={node.attribs.alt || ''} key={index} />;
      default:
        return node.children ? node.children.map((child, idx) => replaceTags(child, idx)) : node.data || node;
    }
  }
  return node.data || node;
};

const transformHTML = (htmlString) => {
  return parse(htmlString, {
    replace: replaceTags,
  });
};

export default transformHTML;
