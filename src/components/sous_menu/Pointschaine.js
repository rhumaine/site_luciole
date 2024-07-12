import React from 'react';
import styled from 'styled-components';
import Header from '../Header';


const StyledDiv = styled.div`
  width: 50%; 
  margin: 10px auto 30px auto; 
  
  @media (max-width: 768px) { 
    width: 75%; 
  }
`;


const Pointschaine = () => {
 
    return (
    <div>
        <Header />
        <h2 className='title-section'>Points de chaine</h2>
        <StyledDiv>
            En cours de travaux
          {/* <Image src={planningTwitch} alt="Points de chaine" /> */}
        </StyledDiv>
    </div>
  );
};

export default Pointschaine;