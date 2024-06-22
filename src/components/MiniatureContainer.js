import React from 'react';
import Miniature from './Miniature';
import Header from './Header';
import { ultiaCyberpunk, ultiaIttakesTwo, ultiaSpiritfarer, ultiaStardew, ultiaAutre } from './data/ultiaData';

const ultiaCategories = [
  { id: 'cyberpunk', title: 'Cyberpunk', data: ultiaCyberpunk },
  { id: 'ittakestwo', title: 'It Takes Two', data: ultiaIttakesTwo },
  { id: 'stardewvalley', title: 'Stardew Valley', data: ultiaStardew },
  { id: 'spiritfarer', title: 'Spiritfarer', data: ultiaSpiritfarer },
  { id: 'autres', title: 'Autres', data: ultiaAutre },
];

const MiniatureContainer = () => {
  const data = {
    ultia: { name: 'Ultia', categories: ultiaCategories }
  };

  return (
    <div>
        <Header/>
        {Object.keys(data).map(key => (
        <Miniature key={key} person={data[key]} />
        ))}
    </div>
  );
};

export default MiniatureContainer;
