/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import PoolesvilleLogo from "../assets/logo.png"
import WatkinsMillLogo from "../assets/Watkins Mill Chapter Logo.png"
import DamascusLogo from "../assets/Damascus Chapter Logo.png"
import "../styles/styles.css"
import SEO from "../components/seo"

export default function App() {
  return (
    <div className="container main-container min-h-screen mx-auto font-serif debug-screens">
      <SEO title="Find a Chapter"></SEO>
      <Navbar></Navbar>
      <div className="flex flex-col min-h-full longpage">
        <div>
          <div className="mx-auto text-4xl font-display text-bold text-center pt-6 pb-2">
            Chapters
        </div>
          <div className="mx-auto text-xl text-center font-serif">
            <p className="text-xl text-center font-serif">
              Chapters are fundamental to C4. They're what allow us to have such a impact. Check out our chapters' pages below or learn how to start one!
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-grow-1 md:flex-row pt-12 pb-3">
          <div className='md:ml-5 md:mr-4 mb-16 md:w-2/5 min-w-1/3 flex-shrink-0'>
            <div className='font-display text-2xl text-CGold bg-CBlue py-2 mb-4 mx-auto rounded-lg text-center'>
              <p className='font-display px-2'>Start a Chapter</p>
            </div>
            <div className="flex flex-col justify-center pb-6">
              <div className="flex flex-col pb-4">
                <div className="flex flex-row justify-center pb-2">
                  <p>All you need to start a chapter is:</p>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-xl text-center">A teacher sponsor to preside over your club</p>
                  <p className="text-xl text-center">A team of Officers: President, Vice President, Secretary, Treasurer, Publicity Officer, and Outreach Officer (Optional)</p>
                </div>
              </div>
              <p className="text-lg text-CGray text-center">
                All Officers must be in 10th grade or above. Chapters must be located in Montgomery County, Maryland.
              </p>
            </div>
            <p className="text-center">
              Find the full set of guidelines <a className="text-CBlue font-bold" href="/img/Guidelines Packet.pdf">here</a>, and if you
              would like to register a Chapter, checkout the form <a className="text-CBlue font-bold" href="https://forms.gle/rYLyvncGAcBmX8AEA">here</a>!
            </p>
          </div>
          <div className="md:mr-5 md:ml-4 mb-16 md:w-3/5 min-w-1/3 flex-shrink-0 font-serif text-xl">
            <div className='font-display text-2xl text-CGold bg-CBlue py-2 mb-4 mx-auto rounded-lg text-center'>
              <p className='font-display px-2'>Current Chapters</p>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row mx-4 my-2 justify-around items-center">
                <img className="w-1/6 mr-2" src={PoolesvilleLogo} alt="Poolesville Logo" />
                <AniLink paintDrip to="/chapters/poolesville" hex="#d9b559" className="font-display font-medium text-center text-CBlue hover:text-CGray">Poolesville High School Chapter</AniLink>
              </div>
              <div className="flex flex-row mx-4 my-2 justify-around items-center">
                <AniLink paintDrip to="/" hex="#d9b559" className="font-display font-medium pl-2 text-center text-CBlue hover:text-CGray">Watkins Mill High School Chapter</AniLink>
                <img className="w-1/6 ml-2" src={WatkinsMillLogo} alt="Watkins Mill Logo" />
              </div>
              <div className="flex flex-row mx-4 my-2 justify-around items-center">
                <img className="w-1/6 mr-2" src={DamascusLogo} alt="Damascus Logo" />
                <AniLink paintDrip to="/" hex="#d9b559" className="font-display font-medium text-center text-CBlue hover:text-CGray">Damascus High School Chapter</AniLink>
              </div>
            </div>

          </div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}
