import { Paper, Stack } from '@mui/material';
import React from 'react';
import Link from 'next/link';
import styles from '@/styles/NewReleaseBookPage/books.module.css';
import Main from '../RatingReviewPage/Start';

interface Book {
    img: string;
    title: string;
    author_name: string;
    summary: string;
  }



function HandleBooks(props: Book) {  
  return (
    <Stack dir="rtl" className={styles.HandleBooks} >
     <Link href={{
        pathname: '/components/RatingReviewPage/Start',
        query: { book: JSON.stringify(props) }
      }}>
      <Paper elevation={10}>
      <div className={styles.HandleBooks}>
          <img src={props.img} alt={props.title}/>
          <h2>العنوان: {props.title}</h2>
          <p>المؤلف: {props.author_name}</p>
          <p>الملخص: {props.summary}</p>
        </div>
      </Paper>
      </Link>
    </Stack>
  );
}

export default HandleBooks;