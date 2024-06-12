import React from 'react'
import styles from "@/styles/HomePage/handleaboutus.module.css"

interface AboutusContentProps {
    image: string;
    name: string;
    
  }

function HandleAboutusContent(props: AboutusContentProps) {
  return (
    <div>
      <a href='#'><img
        src={props.image}
        alt='Not Found'
        className={styles.image}
        /></a>
      <h1 className={styles.name}>{props.name}</h1>

    </div>
  )
}

export default HandleAboutusContent