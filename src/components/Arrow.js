import React from 'react'
import {BsFillArrowLeftSquareFill} from "react-icons/bs"
import {BsFillArrowRightSquareFill} from "react-icons/bs"

function Arrows({prev ,next}) {
  return (
    <div className='slide-arrow'>
      <span className='prev' onClick={prev}>
      <BsFillArrowLeftSquareFill/>
      </span>
      <span className='next' onClick={next}>
        <BsFillArrowRightSquareFill/>
        </span>
    </div>
  )
}

export default Arrows
