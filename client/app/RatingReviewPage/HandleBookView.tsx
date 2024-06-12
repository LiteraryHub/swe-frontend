import React from 'react'
import styles from '@/styles/RatingReviewPage/handlebookview.module.css';
import { FaStar } from "react-icons/fa";
import { Rating } from '@mui/material';
import Card from './Card'

interface Book {
    img: string;
    title: string;
    author_name: string;
    summary: string;
    price:string;
    rating:number;
    date:string;
    reader:string
  }


function HandleBookView(props: Book) {
  return (
    <div dir='rtl' className={styles.bookview}>
        <img
        src={props.img}
        alt="Not Found"
        className={styles.image}
        />
        <div className={styles.content} dir='rtl'>
        
        <h1 className={styles.title}>{props.title}</h1>
  
        <h1 dir='ltr' className={styles.date}>{props.date}</h1>
        <p className={styles.author}>{props.author_name}(المؤلف)</p>
        <div className={styles.rate}>
        <h5  dir="ltr" className={styles.reader}>{props.reader}</h5>
        <Rating  dir='ltr' className={styles.rating} name="read-only" value={props.rating} readOnly />
        <span className={styles.number}>{props.rating}</span>
        </div>
        <hr className={styles.horizontal}/>
        <p className={styles.description}>{props.summary}</p>
        </div>
    </div>
  )
}

export default HandleBookView