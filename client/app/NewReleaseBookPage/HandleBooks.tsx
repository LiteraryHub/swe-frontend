import { Paper, Rating, Stack } from '@mui/material';
import React from 'react';
import Link from 'next/link';
import styles from '@/styles/NewReleaseBookPage/handlenewrelease.module.css';

interface Book {
  _id: string,
  img: string;
  title: string;
  author_name: string;
  summary: string;
  price: string;
  rating: number;
  date: string;
  reader: string;
}


function HandleBooks(props: Book) {
  return (
    <div className={styles.Content}>
      <Link href={{
        pathname: '/RatingReviewPage',
        query: { book: JSON.stringify(props) }
      }}>
        <img className={styles.image} src={props.img} alt={props.title} />
      </Link>
      <Rating dir='ltr' className={styles.rating} name="read-only" value={props.rating} readOnly />
      <h2 className={styles.title} >{props.title}</h2>
      <p className={styles.author}>{props.author_name}</p>
      <h5 className={styles.price}>{props.price}</h5></div>
  );
}

export default HandleBooks;