'use client'
import React, { useState, useEffect } from 'react';
import styles from '@/styles/Discover/Authors/navbar.module.css';
import { AppBar, Toolbar, InputBase, Box, Badge, Avatar, Typography, Pagination } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Link from 'next/link';
import HandleAuthors from './HandleAuthors';
import Diversity3Icon from '@mui/icons-material/Diversity3';

interface Author {
  image: string;
  first_name: string;
  last_name: string;
  bio: string;
  about: string;
  followers: string;

}



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

function NavBar(props: Author) {
  const [search, setSearch] = useState('');
  const [authors, setAuthors] = useState<Author[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const AuthorsPerPage = 2;

  
  useEffect(() => {
    fetchAuthors(currentPage, search);
  }, [currentPage, search]);

  const fetchAuthors = async (page: number, searchTerm: string) => {
    try {
      const response = await axios.get(`http://localhost:3001/getauthorsdiscovers`, {
        params: {
          page: page,
          limit: AuthorsPerPage,
          search: searchTerm
        }
      });
      console.log('Response:', response.data); // Log the response data
      setAuthors(response.data.authors);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching authors:', error);
    }
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };


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
              placeholder="البحث عن الكتاب"
              style={{ fontWeight: 'bold', color: 'black' }}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <Box className={styles.icons}>
          <Link href="/components/HomePage/Start">
            <Badge sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} badgeContent={0} color="error">
                <HomeIcon />
                <Typography className={styles.ty} variant="caption" sx={{ mt: 1}}>الواجهة الرئيسية</Typography> 
            </Badge>
            </Link>
            <Link href="#">
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
            </Link> 
            <Link href="#">
            <Badge sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} badgeContent={0} color="error">
                <NotificationsIcon />
                <Typography className={styles.ty} variant="caption" sx={{ mt: 1 }}>الإشعارات</Typography>
            </Badge>
            </Link>
            <Link href="/Discover/Authors/Navbar">
            <Badge sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} badgeContent={0} color="error">
                <Diversity3Icon />
                <Typography className={styles.ty} variant="caption" sx={{ mt: 1 }}>الكتاب</Typography>
            </Badge>
            </Link>
            <Link href="#">
            <TextAvatar  src="/Publisher.jpg" text="أحمد" />
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      {authors.length > 0 && (
        <h1 className={styles.text}>الكتاب<BookmarkIcon className={styles.tag}/></h1>
      )}
      <div dir='rtl' className={styles.booksContainer}>
        {authors.length === 0 ? (
          <p className={styles.noBooksFound}>لم يتم العثور على الكاتب...</p>
        ) : (
          authors.map((author, index) => (
            <HandleAuthors
              key={index}
              image={author.image}
              first_name={author.first_name}
              last_name={author.last_name}
              bio={author.bio}
              about={author.about}
              followers={author.followers}
            />
          ))
        )}
      </div>
      {authors.length > 0 && (
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          className={styles.pagination}
          color="primary"
        />
      )}
    </>
  );
}

export default NavBar;
