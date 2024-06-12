import React from 'react'
import styles from "@/styles/CoverGeneratorPage/main.module.css"
import HandleForm from './HandleForm'


export default function () {
  return (
    <div className={styles.covergenerator} >
       <img
        src="/logo2.png" 
        alt="LiteraryHub"
        className={styles.logo}
      /> 
      <div className={styles.container}>
      <h1 className={styles.title} dir="rtl">مولد الغلاف</h1>
      <HandleForm/>
      </div>
     
      <img
      src='/orange.png'
      alt='Not Found'
      className={styles.image}
      />
    </div>
  )
}
