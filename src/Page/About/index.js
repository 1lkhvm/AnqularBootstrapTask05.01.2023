import React from 'react'
import AboutComponents from '../../Components/AboutComponents'
import FooterComponents from '../../Components/FooterComponents'
import NavbarComponents from '../../Components/NavbarComponents'

function About() {
    return (
        <>
            <NavbarComponents></NavbarComponents>
            <AboutComponents></AboutComponents>
            <FooterComponents></FooterComponents>
        </>
    )
}

export default About