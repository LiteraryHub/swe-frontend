'use client'
import React from 'react';
import {
  AppBar, Avatar, Badge, Box, Button, Container, Grid, Toolbar, Typography, Paper, List, ListItem, ListItemIcon, ListItemText, CircularProgress, useTheme
} from '@mui/material';
import {
  HomeOutlined as HomeIcon, NotificationsNoneOutlined as NotificationsIcon, PeopleAltOutlined as PeopleIcon, MessageOutlined as MessageIcon, WarningOutlined as WarningIcon
} from '@mui/icons-material';
import NavBar from 'C:/Users/Youssef Tarek/Documents/GarduationProject/client/app/Navbar/NavBar';
import { orange } from '@mui/material/colors';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';

const ResultsPage: React.FC = () => {
  const resultPercentage = 20;
  const topicsFound = ["تطرف سياسي شديد", "عنصرية او تمييز عرقي "];
  const theme = useTheme();

  const getResultColor = (percentage) => {
    if (percentage > 75) return theme.palette.error.main;
    if (percentage > 50) return theme.palette.warning.main;
    return theme.palette.success.main;
  };

  const handleNext = () => {
    console.log('Next button clicked');
    window.location.href = 'http://localhost:3000/PlagiarismCheckerPage';
  };

  return (
    <>
      <NavBar />
      <Container maxWidth="lg" sx={{ mt: 4, fontFamily: 'Roboto' }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} lg={8}> {/* Adjust grid sizing to control width */}
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
               <Typography variant="h3" gutterBottom color="textSecondary" sx={{ fontWeight: 'bold', color: orange[500] }}>
                تحديد المواضيع المقيّدة
              </Typography>
              <Box sx={{ position: 'relative', display: 'inline-flex' }}>
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
              <Typography variant="body1" gutterBottom sx={{ fontSize: '1.3rem' }}>
                :تم ايجاد المواضيع التالية
              </Typography>
              <List>
                {topicsFound.length === 0 ? (
                  <ListItem><ListItemText primary="Nothing was found" /></ListItem>
                ) : (
                  topicsFound.map((topic, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <WarningIcon color="error" />
                      </ListItemIcon>
                      <ListItemText primary={topic} />
                    </ListItem>
                  ))
                )}
              </List>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
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

export default ResultsPage;
