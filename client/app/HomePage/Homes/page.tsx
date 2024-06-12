import React from 'react'
import NavBar from './NavBar'
import LiteraryHub from './LiteraryHub'
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
    <LiteraryHub/>
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