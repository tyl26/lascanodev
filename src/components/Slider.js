import React from 'react'

function Slider({activeindex, IconSlider}) {
  return (
    <div>
      {IconSlider.map((icon, i)=>(
        
     <div key={i} className={`${activeindex === i ? "slides active": "inactive"}`}>
      <img className='slide-img' src={icon.img} alt={icon.title}/>
      <h3 className='slide-text'>{icon.title}</h3>
     </div>
      ))}

    </div>
  )
}

export default Slider;
