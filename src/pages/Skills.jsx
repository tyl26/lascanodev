import React from 'react'
import skillsOne from "../Img/skills-one.svg"
import skillsTwo from "../Img/skills-two.svg"
function Skills() {
  return (
    <section className='skills-container container'>
        <h2>
            Skills.
        </h2>

        <div className='my-skills'>
            <img src={skillsOne} alt="Skills postit one"/>
            <img src={skillsTwo} alt="Skills postit two"/>
        </div>
      <a href="https://www.linkedin.com/in/t-zaryll-yvon-lascano-534605189/">
        <button className='btn'>See more</button>
      </a>
    </section>
  )
}

export default Skills
