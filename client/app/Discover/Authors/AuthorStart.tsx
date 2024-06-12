'use client'
import React from 'react'
import NavBar from './NavBar copy'
import ProfileCard from './ProfileCard'
import About from './About'
import PreviousWorks from './PreviousWorks'
import Stack from '@mui/material/Stack'
import { useRouter } from 'next/router'



function AuthorStart() {
  const router = useRouter();
  const { author } = router.query;

  // Check if book query parameter exists and is a string
  const parsedAuthor = typeof author === 'string' ? JSON.parse(author) : null;

  if (!parsedAuthor) {
    // Handle the case where the book query parameter is not present or invalid
    return <div>Author not found!</div>;
  }


  return (
    <div>
         <NavBar
         image={parsedAuthor.image}
          />
    <Stack spacing={3} style={{marginLeft:100, marginTop:30}}>
          <ProfileCard
           image={parsedAuthor.image}
           first_name={parsedAuthor.first_name}
           last_name={parsedAuthor.last_name}
           bio={parsedAuthor.bio}
           followers={parsedAuthor.followers}
            />
          <About
          about={parsedAuthor.about}
          /> 
    <PreviousWorks/>
    </Stack>
    </div>
    
  )
}

export default AuthorStart