import React, { useState } from 'react'
import { useEffect } from 'react';
import Arrows from '../components/Arrow';
import IconSlider from '../components/IconSlider'
import Slider from '../components/Slider';


const sliderLength = IconSlider.length -1;

function AboutMe() {
  const[activeindex, setActiveindex] = useState(0)

  useEffect(()=>{
    const interval = setInterval(() => {
      setActiveindex(activeindex === sliderLength ? 0 : activeindex + 1)
    }, 3000);
    return()=> clearInterval(interval)

  },[activeindex])

  return (

 <section id='about' className='about-me-container container'>
      <h2>About me.</h2>
      <p className='text-para'>
      This is Charlie. He loves food, candies and sleeping. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim nisl et imperdiet lobortis. Sed elit urna, tincidunt sed mattis a, volutpat ut nisi. Curabitur accumsan. 
      </p>

   <div className='slider-content'>
    <h3>Some of the thing that i enjoy in life.</h3>
      <div>
       <Slider activeindex={activeindex} IconSlider={IconSlider}/>
      </div>
      <div>
      <Arrows 
        prev={()=>
        setActiveindex(activeindex < 1 ? sliderLength : activeindex -1)
        }
        next={()=>
        setActiveindex(activeindex === sliderLength ? 0: activeindex +1)
        } 
        />
      </div>
    </div>
    </section>
  )
}

export default AboutMe
