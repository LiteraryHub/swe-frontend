import React from 'react'
import styles from "@/styles/HomePage/handlenewreleasecontent.module.css"

interface NewReleaseContentProps {
    image: string;
    title: string;
    author: string;
    price: string;
  }

function HandleNewReleaseContent(props: NewReleaseContentProps) {
  return (
    <div className={styles.content}>
    <a href="/components/Books"> <img
    src={props.image}
    alt="Not found"
    className={styles.image}
    /></a>    
    <h3 className={styles.title}>{props.title}</h3>
    <p className={styles.author}>{props.author}</p>
    <h5 className={styles.price}>{props.price}</h5>
</div>
  )
}

export default HandleNewReleaseContent