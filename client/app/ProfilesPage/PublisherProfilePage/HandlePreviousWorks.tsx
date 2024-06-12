
import { Avatar, Stack } from '@mui/material';
import React from 'react'
import styles from '@/styles/ProfilePage/AuthorProfilePage/handlepreviousworks.module.css';

interface BookProps {
    avatar: string;
    title: string;
  }

function HandlePreviousWorks(props: BookProps) {
  return (
    <Stack>
      <div className={styles.previous}>
      {props.avatar && <Avatar src={props.avatar} alt="Bookimage" style={{ width: '50px', height: '50px' }} />}
        <h3 className={styles.title}>{props.title}</h3>
      </div>
    </Stack>
  )
}

export default HandlePreviousWorks