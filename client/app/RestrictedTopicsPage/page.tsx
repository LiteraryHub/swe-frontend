'use client'
import React from 'react';
import {
  AppBar, Avatar, Badge, Box, Button, CircularProgress, Container, Grid, Paper, Toolbar, Typography, LinearProgress
} from '@mui/material';
import { styled } from '@mui/material/styles';
import NavBar from 'C:/Users/Youssef Tarek/Documents/GarduationProject/client/app/Navbar/NavBar';

const orange = '#FFA500'; // Orange color for customization

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  borderRadius: theme.shape.borderRadius,
  marginTop: theme.spacing(4),
}));

const CustomLinearProgress = styled(LinearProgress)({
  width: '100%',
  '& .MuiLinearProgress-bar': {
    borderRadius: 5,
    backgroundColor: orange,
  },
});

const RestrictedTopicsDetection: React.FC<{ uploadedBookName: string | null }> = ({ uploadedBookName }) => {
  const handleNext = () => {
    console.log('Next button clicked');
    window.location.href = 'http://localhost:3000/RestrictedTopicsPage2';
  };

  return (
    <>
      <NavBar />
      <Container maxWidth="md">
        <StyledPaper elevation={3}>
          <Typography variant="h3" component="h1" gutterBottom color={orange} sx={{ fontWeight: 'bold' }}>
          تحديد المواضيع المقيّدة
          </Typography>
          <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '1.3rem' }}>
          كتابك المُرفوع "{uploadedBookName}" يُحلّل حاليًا لمحتواه الذي قد ينتهك إرشادات المحتوى لدينا. قد تستغرق هذه العملية بضع لحظات
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mt: 2, textAlign: 'center',fontSize: '1.2rem' }} >
          عملية الكشف هذه تتحقق من وجود مواضيع مقيّدة مثل المحتوى السياسي المتطرّف، العنصرية أو التمييز، التمييز الديني، والمحتوى الجنسي. هدفنا هو الحفاظ على منصة آمنة ومحترمة لجميع القراء والكتّاب
          </Typography>
          <CircularProgress size={60} sx={{ color: orange, mt: 2 }} />
          <CustomLinearProgress variant="indeterminate" sx={{ mt: 2 }} />
          <Button 
  variant="outlined" 
  sx={{ 
    mt: 3, 
    px: 5, 
    color: orange, // Set text color to orange
    borderColor: orange, // Set border color to orange
    '&:hover': { 
      backgroundColor: '#FFFFFF', // White background on hover
      color: '#FFA500', // Orange text color on hover
    } 
  }} 
  onClick={handleNext}
>
  Continue
</Button>
        </StyledPaper>
      </Container>
    </>
  );
};

export default RestrictedTopicsDetection;
