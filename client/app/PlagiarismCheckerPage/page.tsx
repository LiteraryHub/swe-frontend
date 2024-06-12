'use client'
import React from 'react';
import {
  AppBar, Avatar, Badge, Box, Button, CircularProgress, Container, Grid, Paper, Toolbar, Typography, LinearProgress
} from '@mui/material';
import { styled } from '@mui/material/styles';
import NavBar from 'C:/Users/Youssef Tarek/Documents/GarduationProject/client/app/Navbar/NavBar';

const orange = '#FFA500'; // Defining the orange color for reuse

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

const ProgressBox = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

const CustomLinearProgress = styled(LinearProgress)({
  width: '100%',
  '& .MuiLinearProgress-bar': {
    borderRadius: 5,
    backgroundColor: orange, // Using orange for the progress bar
  },
});

const PlagiarismChecker: React.FC<{ uploadedBookName: string | null }> = ({ uploadedBookName }) => {
  const handleNext = () => {
    console.log('Next button clicked');
    window.location.href = 'http://localhost:3000/PlagiarismCheckerPage2';
  };

  return (
    <>
      <NavBar />
      <Container maxWidth="md" dir="rtl"> {/* Apply dir="rtl" here */}
        <StyledPaper elevation={3}>
          <Typography variant="h3" component="h1" gutterBottom color={orange} sx={{ fontWeight: 'bold' }}>
          التحقق من الاقتباسات
          </Typography>
          <Typography variant="subtitle1" gutterBottom sx={{fontSize: '1.4rem' , fontWeight:'bold'}}>
          نحن حاليًا نقوم بتحليل "{uploadedBookName}".للكشف عن الاقتباسات. قد تستغرق هذه العملية بضع لحظات
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mt: 2, textAlign: 'center', fontSize: '1.3rem' }}>
          يقوم فحص الاقتباسات بمستندك بالبحث عن نصوص قد تكون موجودة في مصادر أخرى عبر الويب. نتحقق من التشابه في العبارات والجمل والفقرات لضمان أن محتواك أصلي
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ textAlign: 'center',fontSize: '1.2rem' }}>
          تشمل المواضيع التي يتم فحصها الأعمال المنشورة، والأوراق الأكاديمية، والمواد العامة المتاحة للجميع.
          </Typography>
          <ProgressBox>
            <CircularProgress size={60} thickness={4} sx={{ color: orange }} /> {/* Orange color for CircularProgress */}
            <CustomLinearProgress variant="indeterminate" />
            <Typography variant="body2" color="textSecondary">
              Checking... Please do not close this window.
            </Typography>
          </ProgressBox>
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

export default PlagiarismChecker;
