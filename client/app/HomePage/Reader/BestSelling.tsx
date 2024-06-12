import React from 'react'
import styles from "@/styles/HomePage/bestselling.module.css"
import HandleBestSellingContent from './HandleBestSellingContent'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function BestSelling() {
  return (
    <div dir='rtl' className={styles.bestselling}>

    <HandleBestSellingContent
    image="/book.png"
    author='د.عمرو عبد الحميد '
    title='  أرض زيكولا '
    description={`خالد، شاب مصري مغرم، يبحث عن عمل غير عادي لإرضاء والد حبيبته. فيخوض رحلة محفوفة بالمخاطر داخل سرداب قريته ليجد نفسه في زيكولا، أرض غريبة تقيّم الناس فيها بالذكاء بدل المال. يواجه خالد تحديات قاتلة ويخوض مغامرات تكشف له سر عائلته، سر يغيّر حياته للأبد.`}
    price='300 LE'
    />
    
    <div className={styles.main}></div>
    <h1 className={styles.type}>كتاب مميز</h1>
    <hr className={styles.separator} />
    <button className={styles.button} >
       <ArrowForwardIcon  className={styles.arrow}/>
       <span className={styles.span}>عرض المزيد</span> 
        </button>

    </div>
  )
}

export default BestSelling