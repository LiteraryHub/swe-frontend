import React from 'react'
import {Paper} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import styles from '@/styles/ProfilePage/AuthorProfilePage/futureworks.module.css';

function FutureWork() {
  return (
<Paper className={styles.paper} dir="rtl">
<div className={styles.content}>
  <div className={styles.subcontent}>
    <h4 className={styles.title}>الأعمال المستقبلية</h4>
  </div>
  <div className={styles.icons}>
    <AddIcon className={styles.add} />
    <EditIcon className={styles.edit} />
  </div>
</div>

    

    </Paper>

  )
}

export default FutureWork