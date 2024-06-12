import React from 'react'
import styles from '@/styles/HomePage/navigation.module.css'



function Navigation() {
  return (
    <div>
    <hr className={styles.horizontalseparator} />
    <div className={styles.items}>
         <a href="#Home">الواجهة الرئيسية</a>
         <span className={styles.verticalseparator}>|</span>
         <a href="#Aboutus">من نحن</a>
         <span className={styles.verticalseparator}>|</span>
         <a href="#Books">الكتب</a>
         <span className={styles.verticalseparator}>|</span>
         <a href="#NewRelease">الإصدارات الجديدة</a>
         <span className={styles.verticalseparator}>|</span>
         <a href="#Contactus">اتصل بنا</a>
         </div>
    </div>
    

  )
}

export default Navigation