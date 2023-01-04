import React from 'react'
import Hamters from "../Img/Hamsters.png"
import hangman from "../Img/hangman.png"
import weddingCamera from "../Img/wedding-camera.png"
import beers from "../Img/beers.png"
import { useState } from 'react'
import { Link } from 'react-router-dom'
function Projects() {
// const[showTitle, setShowTitle]= useState(false)

// const showProjectTitle = () =>{
//   setShowTitle(true)
// }
// const hideProjectTitle = () =>{
//   setShowTitle(false)
// }

  return (
    <section id='project' className='project-container container'>
      <h2>Projects.</h2>

{/* Gör en json fil för pjoect bilderna */}
<div className='project-wrapper'>
      <a href='' className='project'>
      <img src={Hamters} alt="hamster-ptoject" />
      {/* <p>{showTitle ? "hamsters": ""}</p> */}
      </a>
      <a href='' className='project'>
      <img src={hangman} alt="hangman-ptoject" />
      </a>
      <a href='' className='project'>
      <img src={weddingCamera} alt="weddingcamera-ptoject" />
      </a>
      <a href='' className='project'>
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
