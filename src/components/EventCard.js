/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import "../styles/styles.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function EventCard(props) {
    return (
        <AniLink className="my-3 mx-6 w-full md:w-1/4 lg:w-1/5" paintDrip to={props.eventSlug} hex="#d9b559" duration={.75}>
            <div className="container flex flex-col justify-evenly rounded-2xl shadow-2xl mx-auto p-4 bg-CBlue transition transform hover:-translate-y-2" key={props.eventId}>
                <div className="flex flex-col text-center max-w-full">
                    <h2 className="font-serif max-w-full font-medium text-xl text-center text-CGold">{props.eventName}</h2>
                    <p className="text-base font-display font-medium text-CGold"> {props.date} at {props.time}</p>
                    <p className="text-base font-display font-medium text-CGold"> Hosted by {props.host}</p>
                </div>
                <div className="hidden md:flex md:flex-col md:max-w-full md:text-CGold md:font-medium md:mt-3">
                    <p className="my-auto text-sm text-center font-display ">
                        {props.description}
                    </p>
                </div>
            </div>
        </AniLink>

    )
}
