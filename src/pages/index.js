/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import Navbar from "../components/Navbar"
import "../styles/styles.css"
import CountDiv from "../components/countDiv.js"
import Footer from "../components/Footer"
import { useStaticQuery, graphql } from "gatsby"
import { ModalContainer, Reoverlay } from 'reoverlay';
import { KandasamyModal } from "../components/modals/board/KandasasamyModal"
import SEO from "../components/seo"


export default function App() {
  const showKandasamyModal = () => (
    Reoverlay.showModal(KandasamyModal)
  )
  const data = useStaticQuery(graphql`
    query membersQuery {
      site {
        siteMetadata {
          numberOfMembers
          numberOfChapters
          numberOfYears
        }
      }
    }
  `)
  return (
    <div className="container main-container max-w-full min-h-full pt-0 mx-auto font-serif debug-screens">
      <SEO title="The C4 Organization"></SEO>
      <Navbar></Navbar>
      <div className="page first-page cover flex-col justify-center">
        <div className="align-self-center align-middle w-128 text-center text-4xl font-serif">
          Combating Childhood Cancer Club
        </div>
        <div className="align-self-center align-middle w-128 text-center pt-3 text-2xl font-display" data-sal="slide-up" data-sal-delay="300" data-sal-duration="500">
          Established in 2018
        </div>
      </div>
      <div className="page flex-col md:flex-row justify-center">
        <div className="flex flex-col w-3/4 md:w-1/2 xl:w-1/4 md:mr-8 text-2xl font-serif">
          <p className="text-center md text-xl md:text-2xl">
            Hi! We're glad to see that you've found our website. We're the Combating Childhood Cancer Club, but call us C4.
          </p>
          <p className="text-center text-xl md:text-2xl">
            Our mission is to support young cancer patients and boost their morale through their battle against cancer.
          </p>
          <p className="text-center text-xl md:text-2xl">
            Scroll down to learn a bit more about the club and what we do, or visit one of our other pages to see what they have in store.
          </p>
        </div>
        <CountDiv>
        </CountDiv>
      </div>

      <div className="page flex-col md:flex-row justify-around ">
        <div className='md:ml-5 md:mr-4 mb-2 md:w-1/4 w-full pt-12 flex-shrink-0 align-middle'>
          <div className='font-display text-2xl md:text-3xl text-CGold py-2 mb-4 mx-auto rounded-lg text-center'>
            <p className='font-display font-medium text-2xl md:text-3xl px-2'>Our Values and Goals</p>
          </div>
        </div>
        <div className="md:mr-5 md:ml-4 mb-2 md:w-2/5 min-w-1/3 font-serif text-xl">

          <div className="flex flex-col">
            <p className="font-display text-CBlue pb-4 font-medium text-2xl md:text-3xl">
              Fighting against cancer can be hard, physically and emotionally.
            </p>
            <p className="pb-2">
              The Combating Childhood Cancer Club aims to increase positivity among children battling cancer. We value community efforts and unity in order to help everyone thrive.
            </p>
            <p>
              We also value commitment and positive change as they go hand in hand. We show patients that we love them and they shouldn’t give up!
            </p>
          </div>
        </div>
      </div>
      <div className="page flex-col md:flex-row justify-around ">

        <div className="md:mr-5 md:ml-4 mb-16 md:w-2/5 min-w-1/3 pt-2 font-serif text-xl">
          <div className="flex flex-col">
            <p className="font-display text-CBlue pb-4 font-medium text-2xl md:text-3xl">
              Currently, C4 has over {data.site.siteMetadata.numberOfMembers} members across {data.site.siteMetadata.numberOfChapters} chapters.
            </p>
            <p className="pb-2">
              It's been amazing to see C4 grow from the club it started out as at Poolesville High School in Poolesville, Maryland.
            </p>
            <p className="">
              Over the past {data.site.siteMetadata.numberOfYears} years, we've held all sorts of fundraisers. We've sold candy, held coin competitions, hosted game nights - you name it. We've also spread childhood cancer awareness through informational posts.
            </p>
          </div>
        </div>
        <div className='md:ml-5 md:mr-4 mb-2 md:w-1/4 w-1/3 pt-12 flex-shrink-0 align-middle order-first md:order-last'>
          <div className='font-display text-2xl md:text-3xl text-CGold py-2 mb-4 mx-auto rounded-lg text-center'>
            <p className='font-display font-medium text-2xl md:text-3xl px-2'>History</p>
          </div>
        </div>
      </div>
      <div className="page flex-col md:flex-row justify-around ">
        <div className='md:ml-5 md:mr-4 mb-2 md:w-1/4 w-full pt-12 flex-shrink-0 align-middle'>
          <div className='font-display text-2xl md:text-3xl text-CGold py-2 mb-4 mx-auto rounded-lg text-center'>
            <p className='font-display font-medium text-2xl md:text-3xl px-2'>The Board</p>
          </div>
        </div>
        <div className="md:mr-5 md:ml-4 mb-2 md:w-2/5 min-w-1/3 font-serif text-xl">
          <ModalContainer/>
          <div className="flex flex-col max-w-full">
            <p className="font-display text-CBlue pb-4 font-medium text-2xl md:text-3xl">
              The Board oversees all of C4's activities. Click the names to learn a bit more about them!
            </p>
            <div className="flex flex-row flex-wrap max-w-full">
              <div className="w-1/3 flex-col text-xl md:text-2xl text-CGold bg-CBlue py-2 mb-4 mx-3 rounded-lg text-center">
                <p>Chairwoman</p>
                <p>Roma Dhingra</p>
              </div>
              <div className="w-1/3 flex-col text-xl md:text-2xl text-CGold bg-CBlue py-2 mb-4 mx-3 rounded-lg text-center">
                <p>Vice Chairwoman</p>
                <p>Liz Attumalil</p>
              </div>
              <div className="w-1/3 flex-col text-xl md:text-2xl text-CGold bg-CBlue py-2 mb-4 mx-3 rounded-lg text-center">
                <p>Secretary</p>
                <p>Temi Olarinde</p>
              </div>
              <div className="w-1/3 flex-col text-xl md:text-2xl text-CGold bg-CBlue py-2 mb-4 mx-3 rounded-lg text-center" onClick={showKandasamyModal}>
                <p>Treasurer and Head of Website</p>
                <p>Kandasamy Chokkalingam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
