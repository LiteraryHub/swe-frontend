import React from 'react'
import styles from "@/styles/HomePage/aboutus.module.css"
import HandleAboutusContent from './HandleAboutusContent'


function Aboutus() {
  return (
    <div id='Aboutus' className={styles.team}>
        <h1 className={styles.title}>LiteraryHub Team</h1>
        <div className={styles.members}>
        <div className={styles.moamen}>
        <HandleAboutusContent
          image='/moamen.png'
          name='Moamen Moustafa'  
        />
        </div>
        
        <HandleAboutusContent
          image='/shokr.png'
          name='Ahmed Shokr'  
        />
        <div className={styles.khaled}>
        <HandleAboutusContent
          image='/khaled.png'
          name='Khaled Bahaeldin'  
        />
        </div>
        
        <div className={styles.youssef}> <HandleAboutusContent
          image='/youssef.png'
          name='Youssef Tarek'  
        /></div>
       
        
            
        </div>        
    </div>
  )
}

export default Aboutus