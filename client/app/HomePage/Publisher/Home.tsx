import React from 'react'
import styles from '@/styles/HomePage/home.module.css'
import HandleHomeContent from './HandleHomeContent'
import { Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Home() {
  return (
    <div id="Home" className={styles.home}>
        <div className={styles.content}>
          <HandleHomeContent
            title='LiteraryHub'
            description="المنصة هي حلاً شاملاً للكتّاب والناشرين والقرّاء في عالم الأدب الديناميكي، مع التركيز بشكل خاص على الكتب العربية. باستخدام الذكاء الاصطناعي المتقدم وتعلم الآلة، توفر مجموعة من الخدمات والأدوات لتلبية الاحتياجات المتنوعة لأولئك الذين يشاركون في النظام البيئي الأدبي."
          />
       
        <Button className={styles.button} variant="outlined"><span className={styles.text}>انضم إلينا</span><ArrowForwardIcon className={styles.arrow}/></Button>
        
       
        </div>
        <img
        src="/content.png" 
        alt="LiteraryHub"
        className={styles.contentimage}
        />
    </div>
  )
}

export default Home