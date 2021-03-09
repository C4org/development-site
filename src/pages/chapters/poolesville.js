/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import "../../styles/styles.css"
import SEO from "../../components/seo"

export default function App() {
  return (
    <div className="container main-container min-h-screen mx-auto font-serif debug-screens">
      <SEO title="Poolesville HS Chapter"></SEO>
      <Navbar></Navbar>
      <div className="flex flex-col min-h-full longpage">
        <div className="mx-auto text-4xl font-display text-bold text-center pt-6 pb-2">
          The Poolesville HS Chapter
        </div>
        <div className="mx-auto text-xl text-center font-serif">
          <p className="text-xl text-center font-serif">
            Located at Poolesville High School, Poolesville MD
            </p>
        </div>
        <div className="flex flex-col flex-grow-1 md:flex-row mt-5 w-3/4">
          <p>
            Poolesville C4 was founded in September 2018 by Roma Dhingra at Poolesville High School in Maryland. This club has several school and cars activity fundraisers, including a Spring Fair which got postponed last-minute due to COVID-19. Poolesville C4 is the original C4 chapter.
          </p>
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}
