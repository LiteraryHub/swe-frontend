import React from 'react'
import styles from '@/styles/HomePage/handlecategoriescontent.module.css'

interface CategoryContentProps {
    image: string;
    title: string;
    description: string;
  }

function HandleCategoriesContent(props: CategoryContentProps) {
  return (
    <div className={styles.content}>
        <img
        src={props.image}
        alt="Not found"
        className={styles.image}
        />
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.description}>{props.description}</p>
    </div>
  )
}

export default HandleCategoriesContent