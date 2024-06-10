import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 1rem;
  text-align: center;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; 2024 Mon Portfolio</p>
    </FooterWrapper>
  );
};

export default Footer;
