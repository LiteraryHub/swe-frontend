'use client'
import React, { useState, useEffect } from 'react';
import {
  AppBar, Box, Button, Container, Snackbar, Tab, Tabs, Typography, createTheme, ThemeProvider, Accordion,
  AccordionSummary, AccordionDetails, Radio, RadioGroup, FormControlLabel, styled
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavBar from 'C:/Users/Youssef Tarek/Documents/GarduationProject/client/app/Navbar/NavBar';
import { PrivacySettings, TabQuestions } from './types'; // Adjust the import path as necessary

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#FFA500',
    },
  },
});

const tabQuestions: TabQuestions = {
  profile: [
    {
      questionText: "Who can see your profile?",
      options: ["Public", "Friends", "Only Me"],
      id: "profileVisibility"
    },
    {
      questionText: "Who can send you friend requests?",
      options: ["Everyone", "No One"],
      id: "friendRequestPermission"
    }
    // Additional profile questions here
  ],
  connections: [
    {
      questionText: "Who can see your connections?",
      options: ["Public", "Friends", "Only Me"],
      id: "connectionsVisibility"
    }
    // Additional connections questions here
  ],
  posts: [
    {
      questionText: "Who can see your posts?",
      options: ["Public", "Friends", "Only Me"],
      id: "postsVisibility"
    }
    // Additional posts questions here
  ]
};

const PrivacySettingsPage: React.FC = () => {
  const [tabValue, setTabValue] = useState<number>(0);
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [privacyAnswers, setPrivacyAnswers] = useState<PrivacySettings>({});
  const tabNames = Object.keys(tabQuestions);

  useEffect(() => {
    const savedSettings = localStorage.getItem('privacySettings');
    if (savedSettings) {
      setPrivacyAnswers(JSON.parse(savedSettings));
    }
  }, []);

  const handleChangeTab = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue);
  };

  const handleSaveChanges = () => {
    try {
      const serializedSettings = JSON.stringify(privacyAnswers);
      localStorage.setItem('privacySettings', serializedSettings);
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Failed to save settings:', error);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleChangeAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrivacyAnswers({ ...privacyAnswers, [event.target.name]: event.target.value });
  };

  const renderQuestionsForTab = (tabName: string) => {
    return tabQuestions[tabName].map((question) => (
      <Accordion key={question.id} defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{question.questionText}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RadioGroup
            name={question.id}
            value={privacyAnswers[question.id] || ""}
            onChange={handleChangeAnswer}
          >
            {question.options.map(option => (
              <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
            ))}
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
    ));
  };

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Container maxWidth="lg">
        <Box sx={{ borderBottom: 1, borderColor: 'divider', marginTop: '20px' }}>
          <Tabs value={tabValue} onChange={handleChangeTab} aria-label="privacy settings tabs">
            {tabNames.map((name, index) => (
              <Tab label={name.charAt(0).toUpperCase() + name.slice(1)} key={index} />
            ))}
          </Tabs>
        </Box>
        {renderQuestionsForTab(tabNames[tabValue])}
        <Button variant="outlined" color="secondary" sx={{ mt: 2 }} onClick={handleSaveChanges}>
          Save Changes
        </Button>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          message="Privacy settings saved"
        />
      </Container>
    </ThemeProvider>
  );
};

export default PrivacySettingsPage;
