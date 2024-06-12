'use client'
import React  from 'react';
import NavBar from './NavBar'
import HandleBookView from './HandleBookView';
import RatingsReviews from './RatingsReviews';
import { useRouter } from 'next/navigation'; // Importing useRouter from next/navigation
import Card from './Card';
import Grid from '@mui/material/Grid';

function Start() {
  const router = useRouter();
  const searchParams = new URLSearchParams(window.location.search); // Using useSearchParams() to get query parameters
  const book = searchParams.get('book');

  // Check if book query parameter exists and is a string
  const parsedBook = book ? JSON.parse(book) : null;

  if (!parsedBook) {
    // Handle the case where the book query parameter is not present or invalid
    return <div>Book not found!</div>;
  }

  return (
    <div>
        <NavBar/>
        <div dir='rtl'>
        <Grid  container spacing={75}>
      {/* First Column */}
      <Grid item xs={6}>
        <HandleBookView
          img={parsedBook.img}
          title={parsedBook.title}
          author_name={parsedBook.author_name}
          summary={parsedBook.summary}
          price={parsedBook.price}
          rating={parsedBook.rating}
          date={parsedBook.date}
          reader={parsedBook.reader}
        />
      </Grid>

      {/* Second Column */}
      <Grid item xs={6}>
        <Card price={parsedBook.price} />
      </Grid>
    </Grid>

        </div>
       
      <RatingsReviews 
      _id={parsedBook._id}
      
      />
    </div>
  )
}

export default Start;
