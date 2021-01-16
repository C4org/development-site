import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <div className="max-w-full bg-CBlue fixed bottom-0 w-screen left-0 z-40 h-16">
      <div className="flex justify-center my-3">
        <div className="min-content mr-20 align-self-center font-display text-CGold text-2xl">
          &copy; 2021 C4. Site hosted on <a href="https://github.com/C4org/C4org.github.io">GitHub.</a>
        </div>
        <div className="min-content mr-3 font-display text-CGold text-2xl">
          Social Media:
        </div>
        <a className="text-CGold mr-3 hover:text-CGray" href="https://www.instagram.com/poolesvillec4/"><FontAwesomeIcon className="my-auto" size="2x" icon={faInstagram} /></a>
        <a className="text-CGold mr-3 hover:text-CGray" href="https://www.facebook.com/Poolesville-Combating-Childhood-Cancer-Club-109611417299285/"><FontAwesomeIcon size="2x" icon={faFacebook} /></a>
        <a className="text-CGold mr-3 hover:text-CGray" href="mailto: officialc4club@gmail.com" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon size="2x" icon={faEnvelope} /></a>

      </div>
    </div>
  )
}
