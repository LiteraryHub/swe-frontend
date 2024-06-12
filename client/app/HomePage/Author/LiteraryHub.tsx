import React from 'react';
import Link from 'next/link';
import styles from '@/styles/HomePage/literaryHub.module.css';
import { Avatar, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';



function LiteraryHub() {
  return (
    <div className={styles.component}>
        <img
        src="/logo2.png" 
        alt="LiteraryHub"
        className={styles.logo}
      />
      <div className={styles.search} dir='rtl'>
            <SearchIcon className={styles.searchicon2} />
            <InputBase
              className={styles.inputbase}
              placeholder="ابحث"
              style={{ fontWeight: 'bold', color: 'black' }}
              
            />
          </div>
      

       <div className={styles.authentication}>
         <a href="/components/SignupPage/SignupStart" className={styles.signup}>التسجيل</a>
         <span className={styles.separator}>|</span>
         <a href="/components/LoginPage/LoginStart" className={styles.login} style={{ whiteSpace: 'nowrap' }}>تسجيل الدخول</a>
         <span className={styles.separator}>|</span>
         </div>
         
        
    </div>
  )
}

export default LiteraryHub