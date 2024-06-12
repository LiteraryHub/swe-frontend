'use client'
import React, {useState,useRef, useEffect} from 'react'
import styles from '@/styles/ProfilePage/AuthorProfilePage/navbar.module.css';
import { AppBar, Toolbar, InputBase, styled, Box, Badge, Avatar, Typography} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';


import HandleBooks from './HandleBooks'
import Main from '../RatingReviewPage/Main';

import axios from 'axios'

import { error } from 'console';


interface Book {
  img: string;
  title: string;
  author_name: string;
  summary: string;
}



interface TextAvatarProps {
    src: string; // Type the src prop to be a string
    text: string; // Type the text prop to be a string
  }

  const TextAvatar: React.FC<TextAvatarProps> = ({ src, text }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Avatar sx={{ width: 25, height: 25 }} src={src} />
      <Typography variant="caption" sx={{ mt: 1 }}>
        {text}
      </Typography>
    </div>
  );
  
function NavBar() {

  const [search, setSearch] = useState ("");
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3001/getBooks')
    .then(books =>setBooks(books.data))
    .catch(err => console.log(err))

  },[])
  
  
  
  
  
  
 
  return (
    <div>
<AppBar dir="rtl" position="sticky" className={styles.appbar}>
      <Toolbar className={styles.toolbar}>
        <img
          src="/logo2.png"
          alt="LiteraryHub"
          className={styles.logo}
        />
        <div className={styles.search}>
          <SearchIcon className={styles.searchicon2} />
          <InputBase 
            className={styles.inputbase} 
            placeholder="Search"
            style={{ fontWeight: 'bold', color: 'black' }}
            onChange={(e)=> setSearch(e.target.value)}
          />
        </div>

            <Box className={styles.icons}>
            <Badge sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} badgeContent={0} color="error">
                <HomeIcon />
                <Typography variant="caption" sx={{ mt: 1 }}>Home</Typography>
            </Badge>
            <Badge sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} badgeContent={0} color="error">
                <PeopleAltIcon />
                <Typography variant="caption" sx={{ mt: 1 }}>Network</Typography>
            </Badge>
            <Badge sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} badgeContent={0} color="error">
                <MessageIcon />
                <Typography variant="caption" sx={{ mt: 1 }}>Messaging</Typography>
            </Badge>
            <Badge sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} badgeContent={0} color="error">
                <NotificationsIcon />
                <Typography variant="caption" sx={{ mt: 1 }}>Notification</Typography>
            </Badge>
            <TextAvatar src="/Youssef 2.png" text="Profile" />
            </Box>
            </Toolbar>
        </AppBar>
        <div>
           {books.filter((book)=>{
          const searchTerm = search.toLowerCase();
          return searchTerm === '' || 
          book.title.toLowerCase().includes(searchTerm);
        }).map((book)=>(
        <HandleBooks
          img={book.img}
          title={book.title}
          author_name={book.author_name}
          summary={book.summary}
        />
      ))}
        </div>

    </div>
    
  )
}

export default NavBar