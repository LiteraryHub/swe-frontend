import { Button, Paper } from '@mui/material'
import React from 'react'
import styles from "@/Styles/RatingReviewPage/card.module.css"

interface Card{
    price:string;
}

function Card(props:Card) {
  return (
    <div className={styles.pay}>
      
      <Paper elevation={24} className={styles.card}>
    <img
    src='/1LE.jpg'
    alt='LE'
    className={styles.image}
    />
    <h5 className={styles.price}>{props.price}</h5>
    <div className={styles.buttons}>
    <Button 
      className={styles.button1} 
      variant="contained" 
      style={{
        backgroundColor: 'rgb(143, 143, 47)',
        borderRadius: '20px',
        marginRight: '5px',
        textTransform: 'capitalize',
      }}
    >
      أضف إلى السلة
    </Button>
    <Button 
      className={styles.button2} 
      variant="contained" 
      style={{
        backgroundColor: '#C26D0A',
        borderRadius: '20px',
        marginRight: '5px',
        textTransform: 'capitalize',
        marginTop: '10px',
             }}
    >
  اشترِ الآن
</Button>
    </div>    
    
    </Paper>
    
    </div>
    
    
  )
}

export default Card