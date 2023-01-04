import React from 'react'
import FooterComponents from '../../Components/FooterComponents'
import Homesection1 from '../../Components/HomeComponents/HomeSection1'
import Homesection2 from '../../Components/HomeComponents/HomeSection2'

import NavbarComponents from '../../Components/NavbarComponents'

export default function Home() {
    return (
        <>
            <NavbarComponents></NavbarComponents>
            <Homesection1></Homesection1>
            <Homesection2></Homesection2>
            <FooterComponents></FooterComponents>
        </>
    )
}
