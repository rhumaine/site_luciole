import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import logo from '../img/logoBannieres/logos.jpg';
import banniere from '../img/logoBannieres/bannieres.jpg';

const Image = styled.img`
  width: 100%;
  transition: transform 0.3s ease-in-out;

   &:hover {
    transform: scale(1.1);
  }
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
    border-top: dotted 5px #320F13;
    height: 4px;
  }
`;

const LogoBanniere = () => {
 
    return (
    <div>
        <Header />
        <h2 className='title-section'>Logos</h2>
        <div className='w-50 m-auto'>
          <Image src={logo} alt="Logos" />
        </div>
        <StyledHr />
        <h2 className='title-section'>Bannières</h2>
        <div className='w-50 m-auto mb-5'>
          <Image src={banniere} alt="Bannières" />
        </div>
    </div>
  );
};

export default LogoBanniere;