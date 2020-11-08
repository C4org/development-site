import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export default function About(){
    return (
        <div>
            <AniLink cover direction="right" to="/" bg="#12447D">Click me 1</AniLink>
        </div>
    )
}