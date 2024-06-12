import React from 'react';
import { data } from "./data.js";
import { Button } from '@mui/material';
import styles from '@/styles/ProfilePage/AuthorProfilePage/profilecard.module.css';

function Discuss() {
  return (
    <div dir='rtl' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {data.map((book) => (
        <div style={{ textAlign: 'center' }}>
          <img src={book.image} alt={book.title} style={{ margin: 'auto', marginTop: "20px", border: "2px solid orange" }} />
          <h1 style={{ fontWeight: "900", fontSize: "25px" }}>{book.title}</h1>
          <p style={{ fontWeight: "600" }}>{book.summary}</p>
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <Button size="small" className={styles.button1} variant="contained" style={{ marginLeft: "30px" }} >تواصل مع الكاتب</Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Discuss;
