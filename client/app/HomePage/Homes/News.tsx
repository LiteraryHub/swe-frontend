import React from 'react'
import styles from "@/styles/HomePage/news.module.css"

function News() {
  return (
    <div className={styles.news}>
        <p className={styles.title}>Subscribe To Our Newsletter</p>
        <div className={styles.content}>
        <div className={styles.enter}>
        <p className={styles.read}>Level up your knowledge:Get expert tips and tricks<br/>delivered directly to you.</p>
        <div className={styles.container}>
        <input
        type='email'
        placeholder='Enter your email addresss here'
        className={styles.email}
        />
        <div className={styles.container2}>
        <a href='#'>
        <h3 className={styles.send}>SEND</h3>
        </a>
        <img
        src='/send.svg'
        alt='Not Found'
        className={styles.image}
        />
        </div>
        
        </div>
       

        </div>
        
        </div>

    </div>
  )
}

export default News