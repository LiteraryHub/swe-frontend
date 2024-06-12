import React, { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa";
import styles from '@/styles/RatingReviewPage/ratingreview.module.css';
import Button from '@mui/material/Button';
import axios from 'axios'; // Import axios for making HTTP requests
import { Rating } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
};

interface ReviewItem {
    rate: number;
    review: string;
}

interface Book{
    _id:string;
    
}

function RatingsReviews(props:Book) {
    const [currentValue, setCurrentValue] = useState<number>(0);
    const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);
    const [reviews, setReviews] = useState<ReviewItem[]>([]);
    const [reviewText, setReviewText] = useState<string>('');
    const [isOpen, setIsOpen] = useState(false);
    

    useEffect(() => {
        fetchRatingsReviews();
    }, []);

    const fetchRatingsReviews = async () => {
        try {
            const response = await axios.get<ReviewItem[]>(`http://localhost:3001/getRatings?bookId=${props._id}`);
            setReviews(response.data);
        } catch (error:any) {
            console.error('Error fetching ratings and reviews:', error.message);
        }
    };

    const handleClick = (value: number) => {
        setCurrentValue(value);
    };

    const handleMouseOver = (newHoverValue: number) => {
        setHoverValue(newHoverValue);
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    };

    const handleReviewSubmit = () => {
        axios.post('http://localhost:3001/addRating', { rate: currentValue, review: reviewText, bookId: props._id })
            .then(response => {
                setReviews([...reviews, response.data]);
                setReviewText('');
                setCurrentValue(0);
            })
            .catch(error => {
                console.error('Error submitting rating and review:', error);
                // Log the error message from the response if available
                if (error.response) {
                    console.error('Response data:', error.response.data);
                }
            });
    };
    const handleReviewChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReviewText(event.target.value);
    };

    function handelclick(){
        setIsOpen(!isOpen)

    }

    return (
        <div className={styles.container} dir='rtl'>
            <h2 className={styles.title}>تقييمك</h2>
            <div dir='ltr' className={styles.stars}>
                {[1, 2, 3, 4, 5].map((value) => {
                    return (
                        <FaStar
                            key={value}
                            size={24}
                            onClick={() => handleClick(value)}
                            onMouseOver={() => handleMouseOver(value)}
                            onMouseLeave={handleMouseLeave}
                            color={(hoverValue || currentValue) >= value ? colors.orange : colors.grey}
                            style={{
                                marginRight: 10,
                                cursor: "pointer"
                            }}
                        />
                    )
                })}
            </div>
            <textarea
                placeholder="ما هي تجربتك؟"
                className={styles.textarea}
                value={reviewText}
                onChange={handleReviewChange}
            />

            <Button 
                size="small" 
                variant="contained" 
                className={styles.button1} 
                onClick={handleReviewSubmit}
                style={{
                    backgroundColor: '#C26D0A',
                    textTransform: 'capitalize',
                    marginRight: '-60px',
                    marginTop: '55px'
                }}
            >
                تقديم
            </Button>

            <div className={styles.list}>
                <h3 className={styles.head}>
                التقييمات والآراء 
                <Button
                className={styles.show}
                endIcon={isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                variant="text"
                size="large"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? "إغلاق" : "عرض"}
            </Button>
                </h3>
                {isOpen && (
                    <ul>
                        {reviews.map((item, index) => (
                            <li key={index}>
                                <p >التقييم: <Rating className={styles.rate} dir='ltr' name="read-only" value={item.rate} readOnly /></p>
                                <p>المراجعة: {item.review}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <br/>
            <br/>
            
        </div>
    )
}

export default RatingsReviews;
