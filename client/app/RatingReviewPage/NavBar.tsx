'use client'
import React, { useState, useEffect } from 'react';
import styles from '@/styles/NewReleaseBookPage/navbar.module.css';
import { AppBar, Toolbar, InputBase, Box, Badge, Avatar, Typography, Pagination } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';


interface TextAvatarProps {
    src: string; // Type the src prop to be a string
    text: string; // Type the text prop to be a string
  }

  const TextAvatar: React.FC<TextAvatarProps> = ({ src, text }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Avatar sx={{ width: 25, height: 25 }} src={src} />
      <Typography style={{fontWeight:"bold"}} variant="caption" sx={{ mt: 1 }}>
        {text}
      </Typography>
    </div>
  );
  
function NavBar() {

 
  return (
  <>
    <AppBar position="sticky" className={styles.appbar}>
    <Toolbar className={styles.toolbar}>
      <img
        src="/logo2.png"
        alt="LiteraryHub"
        className={styles.logo}
      />
      <div className={styles.search} dir='rtl'>
        <SearchIcon className={styles.searchicon2} />
        <InputBase
          className={styles.inputbase}
          placeholder="ابحث  "
          style={{ fontWeight: 'bold', color: 'black' }}
        />
      </div>

      <Box className={styles.icons}>
      <Link href="/HomePage/Publisher">
        <Badge sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} badgeContent={0} color="error">
            <HomeIcon />
            <Typography className={styles.ty} variant="caption" sx={{ mt: 1}} style={{fontWeight:"bold"}}>الواجهة الرئيسية</Typography> 
        </Badge>
        </Link>
        {/* <Link href="#">
        <Badge sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} badgeContent={0} color="error">
            <PeopleAltIcon />
            <Typography className={styles.ty} variant="caption" sx={{ mt: 1 }}>شبكتي </Typography>
        </Badge>
        </Link>
        <Link href="#">
        <Badge sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} badgeContent={0} color="error">
            <MessageIcon />
            <Typography className={styles.ty} variant="caption" sx={{ mt: 1 }}>الرسائل</Typography>
        </Badge>
        </Link>  */}
        <Link href="#">
        <Badge sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}  badgeContent={0} color="error">
            <NotificationsIcon />
            <Typography className={styles.ty} variant="caption" sx={{ mt: 1 }} style={{fontWeight:"bold"}}>الإشعارات</Typography>
        </Badge>
        </Link>
        <Link href="/ProfilesPage/PublisherProfilePage">
        <TextAvatar   src="/Reader.jpg" text="يوسف" />
        </Link>
      </Box>
    </Toolbar>
  </AppBar>
  </>
        


    
  )
}

export default NavBar