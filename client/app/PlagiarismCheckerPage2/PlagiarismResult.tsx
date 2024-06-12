'use client'
import React from 'react';
import {
  AppBar, Avatar, Badge, Box, Button, Card, CardContent, CircularProgress, Container, Grid, Typography, LinearProgress, useTheme, Paper
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import NavBar from 'C:/Users/Youssef Tarek/Documents/GarduationProject/client/app/Navbar/NavBar';
import { orange } from '@mui/material/colors';

const PlagiarismResultsPage: React.FC = () => {
  const resultPercentage = 10;
  const topicsFound = ["محتوى مشابه في الانترنت", "محتوى مشابه في الاوراق الاكاديمية"];
  const theme = useTheme();

  const getResultColor = (percentage) => {
    if (percentage > 75) return theme.palette.error.main;
    if (percentage > 50) return theme.palette.warning.main;
    return theme.palette.success.main;
  };

  return (
    <>
      <NavBar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={8}>
          <Paper elevation={6} sx={{ 
              padding: '40px', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: 4,
              height: '100%', // Make height consistent or set a specific value
              maxWidth: '600px', // Set a specific maxWidth for consistency
              margin: 'auto' // Center the paper component if the grid doesn't fill the viewport width
              }}>
                <Typography variant="h4" color="text.primary" gutterBottom color="textSecondary" sx={{ fontWeight: 'bold', color: orange[500] }}>
                التحقق من الاقتباسات
                </Typography>
                <Box sx={{ position: 'relative', display: 'inline-flex', mb: 4 }}>
                  <CircularProgress variant="determinate" value={resultPercentage} size={140} thickness={4} style={{ color: getResultColor(resultPercentage) }} />
                  <Box
                    sx={{
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      position: 'absolute',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography variant="h5" component="div" color="text.secondary">
                      {`${resultPercentage}%`}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '1.3rem' }}>
                :تم ايجاد المواضيع التالية
                </Typography>
                {topicsFound.map((topic, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                    <PlagiarismIcon color="action" />
                    <Typography variant="body1">{topic}</Typography>
                  </Box>
                ))}
                <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
                  <Button variant="outlined" startIcon={<UploadFileIcon />} sx={{ backgroundColor: 'primary.main', '&:hover': { backgroundColor: 'primary.dark' } }}>
                    Reupload
                  </Button>
                  <Button variant="outlined" endIcon={<ArrowForwardIcon />} sx={{ backgroundColor: 'secondary.main', '&:hover': { backgroundColor: 'secondary.dark' } }}>
                    Next
                  </Button>
                </Box>
                </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default PlagiarismResultsPage;
