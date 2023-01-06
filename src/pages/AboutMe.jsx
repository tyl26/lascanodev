import React, { useState } from 'react'
import { useEffect } from 'react';
import Arrows from '../components/Arrow';
import IconSlider from '../components/IconSlider'
import Slider from '../components/Slider';


const sliderLength = IconSlider.length - 1;

function AboutMe() {
  const [activeindex, setActiveindex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveindex(activeindex === sliderLength ? 0 : activeindex + 1)
    }, 3000);
    return () => clearInterval(interval)

  }, [activeindex])

  return (

    <section id='about' className='about-me-container container'>
      <h2>About me.</h2>
      <p className='text-para'>
        My name is Yvon. I am on my way to become a front-end developer, stuying at NBI/Handelakademi, Gothenburg.

        My love for web development and coding started back in late 2019 however I was not very engaged until 2020 when I become more focused on myself and knowing what I wanted to do in the future.

        That was when I decided to apply to school to study Front-end Developer. Fast forward to the present day I am now almost done with my study (9th of June 2023), therefore, it is time for me to look for a job in place or remotely. I am eager to develop and learn everything that there is in the developer world and looking for the next step up in my career by joining an awesome team!

      </p>

      <div className='slider-content'>
        <h3>Some of the thing that i enjoy in life.</h3>
        <div>
          <Slider activeindex={activeindex} IconSlider={IconSlider} />
        </div>
        <div>
          <Arrows
            prev={() =>
              setActiveindex(activeindex < 1 ? sliderLength : activeindex - 1)
            }
            next={() =>
              setActiveindex(activeindex === sliderLength ? 0 : activeindex + 1)
            }
          />
        </div>
      </div>
    </section>
  )
}

export default AboutMe
