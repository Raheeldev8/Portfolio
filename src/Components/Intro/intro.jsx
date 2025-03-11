
import img from '../../assets/img/zoro.jpg'
import React from 'react';
import MyCards from '../Cards/crew';

import './intro.css';



function MainCard() {
  return (
    <>
      <div className='s-cards'>
        <MyCards
          pic={img}
          title="Zoro"
          data="
           Zoro, the Straw Hat Pirates’ swordsman, wields a three-sword style and dreams of being the greatest. His strength, loyalty to Luffy, and discipline make him an essential part of the crew."
        />
        <MyCards
          pic={img}
          title="Sanji"
          data="Sanji, the Straw Hat Pirates' cook, dreams of finding the All Blue, a legendary sea with every kind of fish. A master chef and fighter, his powerful kicks and unwavering loyalty make him essential to the crew.."
        />
        <MyCards
          pic={img}
          title="Zoro"
          data="
     Jinbe, the Straw Hat Pirates' helmsman, is a master of Fish-Man Karate and a former Warlord of the Sea. His wisdom and strength, paired with his dream of peace between humans and fishmen, make him indispensable to the crew." />
        <MyCards
          pic={img}
          title="Zoro"
          data="
     Jinbe, the Straw Hat Pirates' helmsman, is a master of Fish-Man Karate and a former Warlord of the Sea. His wisdom and strength, paired with his dream of peace between humans and fishmen, make him indispensable to the crew." />
        <MyCards
          pic={img}
          title="Zoro"
          data="
     Jinbe, the Straw Hat Pirates' helmsman, is a master of Fish-Man Karate and a former Warlord of the Sea. His wisdom and strength, paired with his dream of peace between humans and fishmen, make him indispensable to the crew." />
        <MyCards
          pic={img}
          title="Zoro"
          data="
     Jinbe, the Straw Hat Pirates' helmsman, is a master of Fish-Man Karate and a former Warlord of the Sea. His wisdom and strength, paired with his dream of peace between humans and fishmen, make him indispensable to the crew." />

      </div>
    </>


  );
}
export default MainCard