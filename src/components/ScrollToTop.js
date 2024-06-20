import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import UpArrow from '../img/up_arrow.svg';

const ScrollButton = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  opacity: ${props => (props.visible ? '0.8' : '0')};

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  & img {
    width: 24px;
    height: 24px;
  }
`;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <ScrollButton onClick={scrollToTop} visible={visible}>
      <img src={UpArrow} alt="Go to top" />
    </ScrollButton>
  );
};

export default ScrollToTop;
