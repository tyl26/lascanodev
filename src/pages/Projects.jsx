import React from 'react'
import Hamters from "../Img/Hamsters.png"
import hangman from "../Img/hangman.png"
import weddingCamera from "../Img/wedding-camera.png"
import beers from "../Img/beers.png"
function Projects() {


  return (
    <section id='project' className='project-container container'>
      <h2>Projects.</h2>


<div className='project-wrapper'>
      <a href='https://hamsterwars-c1yj.onrender.com/' className='project'>
      <img src={Hamters} alt="hamster-ptoject" />
      </a>
      <a href='https://github.com/tyl26/Hangman-' className='project'>
      <img src={hangman} alt="hangman-ptoject" />
      </a>
      <a href='https://github.com/tyl26/Wedding-Camera-app' className='project'>
      <img src={weddingCamera} alt="weddingcamera-ptoject" />
      </a>
      <a href='https://github.com/tyl26/Beers' className='project'>
      <img src={beers} alt="beers-ptoject" />
      </a>
</div>     
     <a href='https://github.com/tyl26?tab=repositories'>
      <button className='btn' >More project</button>
      </a>   
    </section>
  )
}

export default Projects
