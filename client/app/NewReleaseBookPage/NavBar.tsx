import React, { useState, useEffect } from 'react';
import styles from '@/styles/NewReleaseBookPage/navbar.module.css';
import { AppBar, Toolbar, InputBase, Box, Badge, Avatar, Typography, Pagination } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import HandleBooks from './HandleBooks';
import axios from 'axios';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Link from 'next/link';

interface Book {
  _id:string,
  img: string;
  title: string;
  author_name: string;
  summary: string;
  price: string;
  rating: number;
  date: string;
  reader: string;
  
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

function NavBar() {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState<Book[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const booksPerPage = 2;

  useEffect(() => {
    fetchBooks(currentPage, search);
  }, [currentPage, search]);

  const fetchBooks = async (page: number, searchTerm: string) => {
    try {
      const response = await axios.get(`http://localhost:3001/getBooks`, {
        params: {
          page: page,
          limit: booksPerPage,
          search: searchTerm
        }
      });
      console.log('Response:', response.data); // Log the response data
      setBooks(response.data.books);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching books:', error);
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
              placeholder="ابحث في الكتب"
              style={{ fontWeight: 'bold', color: 'black' }}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <Box className={styles.icons}>
          <Link href="/HomePage/Publisher">
            <Badge sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} badgeContent={0} color="error">
                <HomeIcon />
                <Typography className={styles.ty} variant="caption" sx={{ mt: 1}}>الواجهة الرئيسية</Typography> 
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
            <Badge sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} badgeContent={0} color="error">
                <NotificationsIcon />
                <Typography className={styles.ty} variant="caption" sx={{ mt: 1 }}>الإشعارات</Typography>
            </Badge>
            </Link>
            <Link href="/ProfilesPage/PublisherProfilePage">
            <TextAvatar  src="/Reader.jpg" text="يوسف" />
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      {books.length > 0 && (
        <h1 className={styles.text}>كتب جديدة صدرت حديثًا<BookmarkIcon className={styles.tag}/></h1>
      )}
      <div dir='rtl' className={styles.booksContainer}>
        {books.length === 0 ? (
          <p className={styles.noBooksFound}>لم يتم العثور على كتب...</p>
        ) : (
          books.map((book, index) => (
            <HandleBooks
              key={index}
              _id={book._id}
              img={book.img}
              title={book.title}
              author_name={book.author_name}
              summary={book.summary}
              price={book.price}
              rating={book.rating}
              date={book.date}
              reader={book.reader}
            />
          ))
        )}
      </div>
      {books.length > 0 && (
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
