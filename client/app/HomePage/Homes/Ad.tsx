import React from 'react'
import styles from '@/styles/HomePage/ad.module.css'
import { Button } from '@mui/material'

function Ad() {
  return (
    <div className={styles.main}>
      <div id="Books" className={styles.ad}>
    <div dir='rtl' className={styles.title}>
    <hr className={styles.separator} />
    <h5 dir='rtl' className={styles.contenttitle}>كتاب إلكتروني</h5>
    </div>

    <div className={styles.content}>
        <div>
        <h1 dir='rtl' className={styles.explore}>الوصول، القراءة، التمرين، والتفاعل
مع المحتوى الرقمي (الكتاب الإلكتروني) </h1>
        <div className={styles.inputwrapper}>
        <input dir='rtl' type="text" placeholder="أدخل بريدك الإلكتروني" className={styles.email}/>
        <Button className={styles.button} variant="contained">تسجيل الدخول</Button>
        </div>

        </div>
        
        <img
        src="/background2.png"
        alt="Not Found"
        className={styles.image}
        />
    </div>
   

    </div>

    </div>
    
  )
}

export default Ad