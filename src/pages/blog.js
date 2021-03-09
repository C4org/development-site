/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import Navbar from "../components/Navbar"
import "../styles/styles.css"
import Index from "../components/BlogIndex"
import Footer from "../components/Footer"
import SEO from "../components/seo"

export default function App() {
  return (
    <div className="container main-container min-h-screen mx-auto font-serif debug-screens">
      <SEO title="The Blog"></SEO>
      <Navbar></Navbar>
      <div className="flex flex-col min-h-full longpage">
        <div className="mx-auto text-4xl font-display text-bold text-center pt-6 pb-2">
          Blog Posts
        </div>
        <div className="mx-auto text-xl text-center font-serif">
          <p className="text-xl text-center font-serif">
            Welcome to the C4 Blog! Every now and then, a new post will appear here in one of various categories. It might be part of our educational series, or just some news we'd like to share.
            </p>
          <p className="text-xl text-center font-serif">
            If you have questions, comments or suggestions for any articles feel free to let us know!
          </p>
        </div>
        <Index />
      </div>
      <Footer></Footer>
    </div>
  )
}
