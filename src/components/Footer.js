import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons'
import scrollTo from 'gatsby-plugin-smoothscroll'

export default function Footer() {
  return (
    <div className="max-w-full bg-CBlue absolute bottom-0 w-screen left-0 z-40 h-nav">
      <div className="flex justify-center my-1 md:my-3 ">
        <div className="w-1/3 md:w-min whitespace-normal md:whitespace-nowrap ml-3 md:ml-0 mr-7 align-self-center font-display text-CGold text-sm md:text-2xl">
          &copy; 2021 C4. Site hosted on <a className="hover:text-CGray" href="https://github.com/C4org/C4org.github.io">GitHub.</a>
        </div>
        <div className="flex flex-col md:flex-row items-baseline">
          <div className="text-xs my-auto">
            <a className="text-CGold mr-3 hover:text-CGray" href="https://www.instagram.com/poolesvillec4/"><FontAwesomeIcon size="2x" icon={faInstagram} /></a>
            <a className="text-CGold mr-3 hover:text-CGray" href="https://www.facebook.com/Poolesville-Combating-Childhood-Cancer-Club-109611417299285/"><FontAwesomeIcon size="2x" icon={faFacebook} /></a>
            <a className="text-CGold mr-3 hover:text-CGray" href="mailto: officialc4club@gmail.com" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon size="2x" icon={faEnvelope} /></a>
          </div>
        </div>
        <div className="min-content hidden md:block md:ml-5 mr-3 align-self-center font-display text-CGold text-base md:text-2xl">Back to Top</div>
        <button className="text-CGold ml-10 md:ml-0 hover:text-CGray" onClick={() => scrollTo('#top')}><FontAwesomeIcon size="2x" icon={faLongArrowAltUp} /></button>
      </div>
    </div>
  )
}
