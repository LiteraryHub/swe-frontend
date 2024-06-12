import React, { useState, useEffect } from 'react';
import styles from '@/styles/NewReleaseBookPage/navbar.module.css';
import { AppBar, Toolbar, InputBase, Box, Badge, Avatar, Typography, Pagination, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';




interface TextAvatarProps {
  src: string;
  text: string;
}

const TextAvatar: React.FC<TextAvatarProps> = ({ src, text }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Avatar sx={{ width: 25, height: 25 }} src={src} />
    <Typography className={styles.ty} variant="caption" sx={{ mt: 1 }}>
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
          <Link href="/components/Start">
        <Button variant='contained' className={styles.login} style={{ whiteSpace: 'nowrap', marginLeft:"150px", backgroundColor:"#C26D0A", color:"white" }}>تسجيل الدخول</Button>
        </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
