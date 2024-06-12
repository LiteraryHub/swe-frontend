'use client'
import React from 'react'
import NavBar from './NavBar'
import ProfileCard from './ProfileCard'
import About from './About'
import PreviousWorks from './PreviousWorks'
import FutureWorks from './FutureWorks'
import Stack from '@mui/material/Stack';
import axios from 'axios'
import { useState, useEffect } from 'react'

interface Publisher {
  image: string;
  first_name: string;
  last_name: string;
  bio: string;
  about: string;
  followers: string
}


function PublisherStart() {
    const [publishers, setpublishers] =  useState<Publisher[]>([])
    useEffect(()=>{
      axios.get('http://localhost:3001/getpublishers')
      .then(publishers => setpublishers(publishers.data))
      .catch(err => console.log(err))
    },[])

  return (
    <div>
    {publishers.map((publisher, index) => (
         <NavBar
         image={publisher.image}
         first_name={publisher.first_name}
      
          />
    ))}
    <Stack spacing={3} style={{marginLeft:100, marginTop:30}}>
    {publishers.map((publisher, index) => (
        <React.Fragment key={index}>
          <ProfileCard
           image={publisher.image}
           first_name={publisher.first_name}
           last_name={publisher.last_name}
           bio={publisher.bio}
           followers={publisher.followers}
            />
          <About
          about={publisher.about}
          />
        </React.Fragment>
      ))}
   
    </Stack>
    </div>
    
  )
}

export default PublisherStart