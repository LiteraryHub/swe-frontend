import styles from '@/styles/ProfilePage/AuthorProfilePage/previousworks.module.css';
import React, { useState } from 'react';
import { Paper, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import HandlePreviousWorks from './HandlePreviousWorks';


function PreviousWork() {
  return (
<Paper className={styles.paper} dir="rtl">
<div className={styles.content}>
  <div className={styles.subcontent}>
    <h4 className={styles.title}>الأعمال السابقة</h4>
    <HandlePreviousWorks
      avatar='/رواية-الحب-تحت-زمن-المطر-نجيب-محفوظ.jpg'
      title="الحب تحت المطر"
    />
    <HandlePreviousWorks
      avatar='/71X8-+Q2jPL._AC_UF1000,1000_QL80_.jpg'
      title="أولاد حارتنا"
    />
    <HandlePreviousWorks
      avatar='/رواية-القرار-الأخير-نجيب-محفوظ.jpg'
      title="القرار الاخير"
    />
  </div>
  <div className={styles.icons}>
    <AddIcon className={styles.add} />
    <EditIcon className={styles.edit} />
  </div>
</div>

    

    </Paper>
  )
}

export default PreviousWork