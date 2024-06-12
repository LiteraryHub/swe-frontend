import { Avatar, Paper, Rating, Stack } from '@mui/material';
import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Discover/Authors/handleauthors.module.css';


interface Author {
    image: string;
    first_name: string;
    last_name: string;
    bio: string;
    about: string;
    followers: string;
  
  }


function HandleAuthors(props: Author) {  
  return (
      <div  className={styles.Content}>
      <Link href={{
        pathname: '/DiscoverAuthor',
        query: { author: JSON.stringify(props) }
      }}>
          <Avatar className={styles.image} src={props.image} alt={props.image}/>
          </Link>
          <p className={styles.author}>{props.first_name}{" "}{props.last_name}</p>
         </div>
  );
}

export default HandleAuthors;