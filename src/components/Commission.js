import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import ScrollToTop from './ScrollToTop';
import transformHTML from './TransformHTML';

const Container = styled.section`
  width: 50%;
  margin: 0 auto;

  @media (max-width: 991px){
    width:90%;
  }
`;

const Commission = () => {

  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/api/commissions') // Remplacez par l'URL correcte
      .then(response => response.json())
      .then(data => {
        // Suppose que vous avez une seule page avec 'commission'
        const commissionPage = data.find(page => page.nom.toLowerCase().includes('commission'));
        if (commissionPage) {
          setContent(commissionPage.contenu);
        }
      })
      .catch(error => console.error('Erreur lors de la récupération des données:', error));
  }, []);


  return (
    <div>
      <Header />
      <Container>
        <div>{transformHTML(content)}</div>
      </Container>  
      <ScrollToTop/>
    </div>
  );
};

export default Commission;
