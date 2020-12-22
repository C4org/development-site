import React from "react"
import { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import logo from "../assets/logo.png" 

export default function Navbar() {
  const [isOn, setIsOn] = useState(false)
  return (
    <nav className="max-w-full bg-CBlue fixed w-screen top-0 left-0 z-40">
      <div className="max-w-100 mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-grow justify-between items-center">
            <div className="flex-shrink-0">
              <AniLink paintDrip to="/" hex="#d9b559">
                <img className="h-12 w-12" src={logo} alt="C4" />
              </AniLink>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 text-lg font-display font-medium text-CGold">
                <AniLink
                  cover
                  direction="right"
                  to="/support"
                  bg="#12447D"
                  className="px-3 py-2 rounded-md hover:text-CGray"
                >
                  Support
                </AniLink>
                <AniLink
                  cover
                  direction="left"
                  to="/events"
                  bg="#12447D"
                  className="px-3 py-2 rounded-md hover:text-CGray"
                >
                  Events
                </AniLink>
                <AniLink
                  cover
                  direction="up"
                  to="/chapters"
                  bg="#12447D"
                  className="px-3 py-2 rounded-md hover:text-CGray"
                >
                  Chapters
                </AniLink>
                <AniLink
                  cover
                  direction="down"
                  to="/blog"
                  bg="#12447D"
                  className="px-3 py-2 rounded-md hover:text-CGray"
                >
                  Blog
                </AniLink>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <button
              className="bg-CBlue inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-CGold focus:outline-none"
              onClick={() => setIsOn(!isOn)}
            >
              <span className="sr-only">Open main menu</span>
              {/*
        Heroicon name: menu

        Menu open: "hidden", Menu closed: "block"
      */}
              <svg
                className={`${isOn ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/*
        Heroicon name: x

        Menu open: "block", Menu closed: "hidden"
      */}
              <svg
                className={`${isOn ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/*
Mobile menu, toggle classes based on menu state.

Open: "block", closed: "hidden"
    */}
      <div className={`${isOn ? "block md:block" : "hidden md:hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-CBlue-700 text-base font-sans font-bold text-CGold">
          <AniLink
            cover
            direction="right"
            to="/support"
            bg="#12447D"
            className="block px-3 py-2 rounded-md text-center hover:text-CGray"
          >
            Support
          </AniLink>
          <AniLink
            cover
            direction="left"
            to="/events"
            bg="#12447D"
            className="block px-3 py-2 rounded-md text-center hover:text-CGray"
          >
            Events
          </AniLink>
          <AniLink
            cover
            direction="up"
            to="/chapters"
            bg="#12447D"
            className="block px-3 py-2 rounded-md text-center hover:text-CGray"
          >
            Chapters
          </AniLink>
          <AniLink
            cover
            direction="down"
            to="/blog"
            bg="#12447D"
            className="block px-3 py-2 rounded-md text-center hover:text-CGray"
          >
            Blog
          </AniLink>
        </div>
      </div>
    </nav>
  )
}
