import { 
    ultiaAutre, 
    ultiaCyberpunk, 
    ultiaIttakesTwo, 
    ultiaStardew, 
    ultiaSpiritfarer 
  } from '../data/ultiaData';

import {
    deujnaInzoi,
    deujnaAutres
} from '../data/deujnaData';

import {
    tsunadidaAutres
} from '../data/tsunadidaData';


export const MINIATURES_DATA = {
    ultia: {
        name: "Ultia",
        categories: [
        { 
            id: 'autresUltia',
            title: 'Divers',
            data: ultiaAutre
        },
        { 
            id: 'cyberpunk',
            title: 'Cyberpunk', 
            data: ultiaCyberpunk 
        },
        { 
            id: 'ittakestwo',
            title: 'It Takes Two', 
            data: ultiaIttakesTwo 
        },
        { 
            id: 'stardewvalley',
            title: 'Stardew Valley', 
            data: ultiaStardew 
        },
        { 
            id: 'spiritfarer',
            title: 'Spiritfarer', 
            data: ultiaSpiritfarer 
        }
        ]
    },
    deujna: {
        name: "Deujna",
        categories: [
        { 
            id: 'inzoi',
            title: 'Inzoi',
            data: deujnaInzoi
        },
        {
            id: 'autresDeujna',
            title: 'Divers',
            data: deujnaAutres
        }
        ]
    },
    tsunadida: {
        name: 'Tsunadida',
        categories: [
            {
                id: 'autresTsunadida',
                title: 'Divers',
                data: tsunadidaAutres
            }
        ]
    }
};
