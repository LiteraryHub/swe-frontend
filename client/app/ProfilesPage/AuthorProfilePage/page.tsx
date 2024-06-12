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

interface Author {
  image: string;
  first_name: string;
  last_name: string;
  bio: string;
  about: string;
  followers: string
}


function AuthorStart() {
    const [authors, setAuthors] =  useState<Author[]>([])
    useEffect(()=>{
      axios.get('http://localhost:3001/getauthors')
      .then(authors => setAuthors(authors.data))
      .catch(err => console.log(err))
    },[])

    return (
      <div>
        {Array.isArray(authors) && authors.map((author, index) => (
          <NavBar
            key={index}
            image={author.image}
          />
        ))}
        <Stack spacing={3} style={{marginLeft:100, marginTop:30}}>
          {Array.isArray(authors) && authors.map((author, index) => (
            <React.Fragment key={index}>
              <ProfileCard
                image={author.image}
                first_name={author.first_name}
                last_name={author.last_name}
                bio={author.bio}
                followers={author.followers}
              />
              <About
                about={author.about}
              />
            </React.Fragment>
          ))}
          <PreviousWorks/>
        </Stack>
      </div>
    );
}

export default AuthorStart