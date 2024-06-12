import React from 'react'
import styles from '@/styles/HomePage/newrelease.module.css'
import Link from 'next/link'
import HandleNewReleaseContent from './HandleNewReleaseContent'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function NewRelease() {
  return (
    <div id="NewRelease">
        <h6 className={styles.center}>بعض العناصر ذات الجودة</h6>
        <div className={styles.container}>
        <hr className={styles.separator1} />
        <h1 className={styles.text}>كتب الإصدارات الجديدة</h1>
        <hr className={styles.separator2} />
        </div>

        <div className={styles.newreleasecontent}>
        <HandleNewReleaseContent
        image = {"/الأدب العربي.png"}
        title = {"الأدب العربي الحديث و مذاهبه"}
        author = {"دكتور/ عبدالله خضر حمد"}
        price="230 LE"
        />
        <HandleNewReleaseContent
        image = {"/أمواج في ليلة مظلمة.png"}
        title = {"أمواج في ليلة مظلمة"}
        author = {"احمد اشرف"}
        price="300 LE"
        />
        <HandleNewReleaseContent
        image = {"/زئير الفراشات.png"}
        title = {"زئير الفراشات"}
        author = {"عبير جمال الدين"}
        price="190LE"
        />

        <HandleNewReleaseContent
                image = {"/في غلاف كتاب.png"}
                title = {"في غلاف كتاب"}
                author = {"رناد شريف"}
                price="70LE"
        />
    </div>
        
        <div className={styles.view}>
        <Link href="/NewReleaseBookPage" className={styles.viewallproducts}>عرض جميع المنتجات</Link>
        <ArrowForwardIcon
        className={styles.arrow}
        />
        
        </div>
        </div>
        


    
  )
}

export default NewRelease