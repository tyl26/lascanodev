import React, { useState } from 'react'
import meAnimate from "../Img/me.svg"
import lightBuld from "../Img/light-bulb.gif"
import myLogo from "../Img/myLogo.svg"
import { Link } from 'react-scroll'
import resume from '../assets/CV.pdf'

function Header() {

  const [isHovering, setIsHovering] = useState(false)

  const hover = () => {
    setIsHovering(true)
  }
  const nothovering = () => {
    setIsHovering(false)
  }

  return (
    <section id='home' className='headerContainer'>

      <nav className='nav'>
        <img src={myLogo} alt="logo" className='myLogo' />

        <ul className='nav-menu' >
          <li>
            <Link activeClass="active" to="home" spy={true} smooth={true}>
            </Link>
          </li>
          <li>
            <Link className='link-menu' to="about" spy={true} smooth={true}>
              About
            </Link>
          </li>
          <li>
            <Link className='link-menu' to="project" spy={true} smooth={true}>
              Project
            </Link>
          </li>
          <li>
            <Link className='link-menu' to="contact" spy={true} smooth={true}>
              Contact
            </Link>
          </li>
          <li>
            <button className='resume-btn'>
              <a href={resume} target="_blank" rel='noreferrer' title='Resume'>
                Resume
              </a>
            </button>
          </li>
        </ul>
      </nav>

      <section className='intro-section'>
        <p className='intro-name'>"Hi, I'm Yvon!"</p>
        <h1>I love to bring <br />
          <span onMouseOver={hover} onMouseOut={nothovering}> {isHovering && <img src={lightBuld} className='ideaIcon' alt='light-bulb-idea'></img>} ideas </span>
          to life</h1>
        <div className='meSitting'>

          <img className='meAnimated' src={meAnimate} alt="Animation version of me" />
          <img className='animatedName' src="https://readme-typing-svg.herokuapp.com?font=Pacifico&size=75&pause=1000&color=FFC0E5&width=450&lines=Hi+I'm+Yvon!" alt="Typing SVG" />

        </div>
      </section>
    </section>
  )
}

export default Header
