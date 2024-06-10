import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  padding: 1rem;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Mon Portfolio</h1>
    </HeaderWrapper>
  );
};

export default Header;
