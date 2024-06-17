import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import badgeTwitch from '../img/Emotes/badgeTwitch.jpg';
import emoteTwitch from '../img/Emotes/emote_twitch.jpg';
import planningTwitch from '../img/Emotes/planning.jpg';

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

const Emotes = () => {
 
    return (
    <div>
        <Header />
        <h2 className='title-section'>Badges Twitch</h2>
        <div className='w-75 m-auto'>
          <Image src={badgeTwitch} alt="Badges twitch" />
        </div>
        <StyledHr />
        <h2 className='title-section'>Émotes Twitch - Discord</h2>
        <div className='w-75 m-auto'>
          <Image src={emoteTwitch} alt="Émotes Twitch - Discord" />
        </div>
        <StyledHr />
        <h2 className='title-section'>Planning</h2>
        <div className='w-75 m-auto mb-5'>
          <Image src={planningTwitch} alt="planning" />
        </div>
    </div>
  );
};

export default Emotes;