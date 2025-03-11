import React from 'react'
import "./about.css"

function About() {
  return (
    <>
      <div className="about-container">
        <div className='about-data'>
          <h1>About Straw Hat Pirates</h1>
          <p>The Straw Hat Pirates are a bold and diverse crew led by Monkey D. Luffy, whose dream is to become the Pirate King by finding the legendary
            "One Piece."Each member has a unique skill and ambition: Zoro aims to be the greatest swordsman,
            Nami dreams of mapping the world, and Sanji seeks the mythical All Blue. Usopp strives to be a brave warrior,
            Chopper cures diseases as a doctor, Robin uncovers history, Franky builds the perfect ship, Brook spreads joy through music, and Jinbe bridges peace between humans and fishmen.
            Sailing aboard the Thousand Sunny, they face perilous seas, powerful foes, and deep mysteries, all while bound by their shared
            belief in freedom, friendship, and Luffy’s dream. Together, they’re more than just a crew—they’re a family.</p>
        </div>
        <div className="about-img">
          <img src="https://i.pinimg.com/736x/fb/d0/af/fbd0aff482d82f8119f3cfe4f6fc0e1a.jpg" alt="" />
        </div>
      </div>

    </>
  )
}

export default About
