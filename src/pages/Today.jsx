import React from 'react'
import insta from '../Img/insta.svg'
import linkedIn from '../Img/linkedIn.svg'
import github from '../Img/github.svg'

function Today() {
  return (
    <section id='contact' className='today-container container'>
      <h2>Today.</h2>

      <p className='text-para'> 
      I’m currently looking for an internship everywhere in the world. <br />
    You can get in touch with me on my e-mail and phone at any time. In case you have any questions or just want to say hi! </p>

    <div className='socials'>
       <a href="https://www.instagram.com/tzarylllascano_/"> <img src={insta} alt="insta icon"/> </a>
       <a href="https://www.linkedin.com/in/t-zaryll-yvon-lascano-534605189/"> <img src={linkedIn} alt="linked icon"/> </a>
       <a href="https://github.com/tyl26?tab=repositories"> <img src={github}alt="github icon" /> </a>
    </div> 

      <button className='btn'>
        <a href="mailto:lascanoyvon@gmail.com">Contact me</a>  
      </button>

    </section>
  )
}

export default Today
