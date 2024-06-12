import React from 'react'
import NavBarCopy from '../AuthorProfilePage/NavBarCopy'
import styles from '@/styles/ProfilePage/AuthorProfilePage/profilecard.module.css';
import { Avatar, Paper} from '@mui/material'

function Notifications() {
  return (
    <div><NavBarCopy/>
    <Paper dir="rtl" elevation={13} className={styles.paper} style={{marginLeft:"10%",height:"150px", display:"flex", gap:"10px"}}>
        <Avatar
        src="/Publisher.jpg"
        />
        <h1 style={{marginTop:"10px", fontWeight:"500", fontSize:"15px", marginRight:"10px"}}>يود التواصل معك</h1>
    </Paper>
    
    </div>
  )
}

export default Notifications