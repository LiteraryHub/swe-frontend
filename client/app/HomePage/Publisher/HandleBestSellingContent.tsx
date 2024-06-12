import React from 'react'
import styles from "@/styles/HomePage/handlebestsellingcontent.module.css"

interface BestSellingContentProps {
    image: string;
    author: string;
    title: string;
    description: string;
    price: string;
  }

function HandleBestSellingContent(props: BestSellingContentProps) {
  return (
    <div className={styles.best}>
        <img
        src={props.image}
        alt="Not Found"
        className={styles.image}
        />
        <div className={styles.winner}dir='rtl'>
        <p className={styles.author}>{props.author}</p>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.description}>{props.description}</p>
        <h3 className={styles.price}>{props.price}</h3>
        </div>
    </div>
  )
}

export default HandleBestSellingContent