import React from 'react'
import styles from "@/styles/HomePage/handlehomecontent.module.css"


interface HomeContentProps {
    title: string;
    description: string;
  }
function HandleHomeContent(props: HomeContentProps) {
  return (
    <div dir='rtl'>
        <h1 dir='ltr' className={styles.title}>{props.title}</h1>
        <p className={styles.description}>{props.description}</p>
    </div>
  )
}

export default HandleHomeContent