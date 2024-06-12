import React from 'react'
import NavBar from './NavBar'
import Navigation from './Navigation'
import Home from './Home'
import Categories from './Categories'
import Ad from './Ad'
import NewRelease from './NewRelease'
import BestSelling from './BestSelling'
import Aboutus from './Aboutus'
import SocialMedia from './SocialMedia'


function Start() {
  return (
    <div >
    <NavBar/>
    <Navigation/>
    <Home/>
    <Categories/>
    <Ad/>
    <NewRelease/>
    <BestSelling/>
    <Aboutus/>
    <SocialMedia/></div>
  )
}

export default Start