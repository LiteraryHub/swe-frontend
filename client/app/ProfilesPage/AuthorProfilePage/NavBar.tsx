import React, {useState,useRef, useEffect} from 'react'
import styles from '@/styles/ProfilePage/AuthorProfilePage/navbar.module.css';
import { AppBar, Toolbar, InputBase, styled, Box, Badge, Avatar, Typography} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import MailIcon from '@mui/icons-material/Mail';

interface Author{
  image : string;
}


interface TextAvatarProps {
    src: string; // Type the src prop to be a string
    text: string; // Type the text prop to be a string
  }

  const TextAvatar: React.FC<TextAvatarProps> = ({ src, text }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Avatar sx={{ width: 25, height: 25 }} src={src} />
      <Typography variant="caption" >
        {text}
      </Typography>
    </div>
  );


  interface User {
    id: number;
    name: string;
    }

    const users: User[] = [ 
    { id: 1, name: 'Ahmed' },
    { id: 2, name: 'Ali' },
    { id: 3, name: 'Youssef' },
];

function NavBar(props: Author) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]); // State for recent searches
  const [showRecent, setShowRecent] = useState<boolean>(false); // State to control visibility of recent searches
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const [badgeContent, setBadgeContent] = useState(1);

  const handleONClick = () => {
      setBadgeContent(0);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setSearchResults([]);
        setShowRecent(false); // Hide recent searches if clicked outside the search container
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    const results = users.filter(user =>
      user.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
    setShowRecent(false); // Hide recent searches when typing in the search bar
  };

  const handleClick = (name: string) => {
    setSearchTerm(name);
    setSearchResults([]);
    // Add searched term to recent searches
    setRecentSearches(prevRecentSearches => [...prevRecentSearches.filter(item => item !== name), name]); // Filter out duplicate searches and add the new search at the end
    setShowRecent(false); // Hide recent searches after clicking on a search result
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && searchResults.length > 0) {
      handleClick(searchResults[0].name);
    }
  };

  const handleSearchBarClick = () => {
    setShowRecent(!showRecent); // Toggle visibility of recent searches when clicking on the search bar
  };

  const handleRecentClick = (recent: string) => {
    setSearchTerm(recent);
    setSearchResults([]); // Clear search results when clicking on recent search
    setShowRecent(false); // Hide recent searches after selecting one
  };

  

  return (
    <AppBar position="sticky" className={styles.appbar}>
      <Toolbar className={styles.toolbar}>
        <img
          src="/logo2.png"
          alt="LiteraryHub"
          className={styles.logo}
        />
        <div className={styles.search} ref={searchContainerRef} dir='rtl'>
          <SearchIcon className={styles.searchicon} />
          <InputBase
            placeholder="البحث عن المستخدمين"
            style={{ fontWeight: 'bold', color: 'black' }}
            onChange={handleSearch}
            onKeyPress={handleKeyPress}
            value={searchTerm}
            onClick={handleSearchBarClick} // Call handleSearchBarClick when clicking on the search bar
          />
          {showRecent && recentSearches.length > 0 && (
            <div className={styles.card}>
              <ul className={styles.ul}>
                {recentSearches.slice().reverse().map((recent, index) => ( // Reverse the array here
                  <li
                    key={index}
                    className={styles.li}
                    onClick={() => handleRecentClick(recent)}
                  >
                    {recent}
                  </li>
                ))}
              </ul>
            </div>
                )}
        </div>

          <Box className={styles.icons}>
          <Link href="/HomePage/Author">
            <Badge sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} badgeContent={0} color="error">
                <HomeIcon />
                <Typography className={styles.ty} variant="caption">الواجهة الرئيسية</Typography> 
            </Badge>
            </Link>
            <Link href="#">
            <Badge sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} badgeContent={0} color="error">
                <PeopleAltIcon />
                <Typography className={styles.ty} variant="caption">شبكتي </Typography>
            </Badge>
            </Link>
            <Link href="#">
            <Badge sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} badgeContent={0} color="error">
                <MessageIcon />
                <Typography className={styles.ty} variant="caption" >الرسائل</Typography>
            </Badge>
            </Link> 
            <Link href="/ProfilesPage/noti" onClick={handleONClick}>
            <Badge badgeContent={badgeContent} color="error" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <NotificationsIcon />
                <Typography className={styles.ty} variant="caption">الإشعارات</Typography>
            </Badge>
        </Link>
            <Link href="#">
            <TextAvatar src={props.image} text="نجيب محفوظ" />
            </Link>
            </Box>
            </Toolbar>
        </AppBar>
  )
}

export default NavBar