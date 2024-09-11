import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import pointChaineTwitch from '../../img/portfolio/pointchaine.png';

const StyledDiv = styled.div`
  width: 50%; 
  margin: 10px auto 30px auto; 
  
  @media (max-width: 768px) { 
    width: 75%; 
  }
`;

const Image = styled.img`
  width: 100%;
  margin-bottom:50px;
  transition: transform 0.3s ease-in-out;

   &:hover {
    transform: scale(1.1);
  }
`;

const Pointschaine = () => {
 
    return (
    <div>
        <Header />
        <h2 className='title-section'>Points de chaine</h2>
        <StyledDiv>
            <Image src={pointChaineTwitch} alt="point de chaine" />
        </StyledDiv>
    </div>
  );
};

export default Pointschaine;