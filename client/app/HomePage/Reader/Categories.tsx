import React from 'react'
import styles from '@/styles/HomePage/categories.module.css'
import HandleCategoriesContent from './HandleCategoriesContent'


  

function Categories() {
  return (
    <div dir='rtl' className={styles.head}>
    <div className={styles.title}>
    <hr className={styles.separator} />
    <h5 className={styles.contenttitle}>فئات
</h5>
    </div>

    <div className={styles.content}>
        <h1 className={styles.explore}>استكشف أعلى الفئات</h1>
        <p className={styles.description}>نطلق في رحلة أدبية عبر مجموعتنا المتنوعة من الأنواع المثيرة.
استكشف أعلى الفئات واستمتع بعالم من السرد الغني، والمواضيع المحفزة للتفكير، والسرد المبدع. سواء كنت من محبي الألغاز المثيرة، أو الرومانسيات الدافئة، أو خيال العلم الرائع، أو غير الخيالي المفيد، لدينا مجموعة مختارة تلبي كل ذوق للقرّاء.</p>
    </div>

    <div className={styles.categoriescontent}>
        <HandleCategoriesContent
        image = {"/Romantic.png"}
        title = {"روايات رومانسية"}
        description = {`تمتع بعالم ساحر من الحب والشغف مع رواياتنا الرومانسية. من القصص الدافئة إلى الرومانسيات العاصفة، ستجرفك هذه القصص عن أقدامك وتتركك تتوق إلى المزيد.`}
        />
        <HandleCategoriesContent
        image = {"/Drama.png"}
        title = {"روايات الدراما"}
        description = {`أشعر بشدة المشاعر الإنسانية في روايات الدراما لدينا. اغمر نفسك في قصص مثيرة تستكشف العلاقات ومفارقات الحياة مع سرد جذاب.`}
        />
        <HandleCategoriesContent
        image = {"/Thriller.png"}
        title = {"روايات الإثارة"}
        description = {`اكتشف الأحداث المشوقة، والمفاجآت الغير متوقعة، والسرد الجذاب في مجموعتنا من روايات الإثارة. استعد لتجربة قراءة مثيرة ستبقيك على أطراف مقعدك.`}
        />
    </div>     
    </div>
  )
}

export default Categories