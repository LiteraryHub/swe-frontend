import React from 'react'
import NavBar from '../HomePage/Homes/NavBar'
import LiteraryHub from '../HomePage/Homes/LiteraryHub'
import Home from '../HomePage/Homes/Home'
import Categories from '../HomePage/Homes/Categories'
import Ad from '../HomePage/Homes/Ad'
import NewRelease from '../HomePage/Homes/NewRelease'
import BestSelling from '../HomePage/Homes/BestSelling'
import Aboutus from '../HomePage/Homes/Aboutus'
import SocialMedia from '../HomePage/Homes/SocialMedia'


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