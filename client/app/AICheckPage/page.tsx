"use client"
import React, { useState, useEffect } from 'react';
import {
  AppBar, Avatar, Badge, Box, Button, CircularProgress, Container, Grid, Paper, Toolbar, Typography, LinearProgress, Tooltip, IconButton, Grow, Fade, Modal, Backdrop, TextField, MenuItem, Stepper, Step, StepLabel
} from '@mui/material';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFA500',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  typography: {
    h3: {
      fontWeight: 'bold',
    },
    subtitle1: {
      fontSize: '1.3rem',
    },
  },
});

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
    backgroundColor: theme.palette.primary.main,
  },
});

const languages = [
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'العربية' },
];

const steps = [
  { label: 'تحميل الكتاب', description: 'تحميل الكتاب للتحليل.' },
  { label: 'بدء التحليل', description: 'بدء عملية التحليل.' },
  { label: 'التحقق من المحتوى', description: 'تحليل المحتوى للتحقق من القيود.' },
  { label: 'إنهاء التحليل', description: 'إنهاء عملية التحليل.' },
];

const BookAnalysis: React.FC<{ uploadedBookName: string | null }> = ({ uploadedBookName }) => {
  const [progressMessage, setProgressMessage] = useState(steps[0].description);
  const [showProgress, setShowProgress] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [language, setLanguage] = useState('ar');

  useEffect(() => {
    setShowProgress(true);

    const messages = [
      { text: steps[0].description, step: 1, delay: 30000 }, // 30 seconds for uploading
      { text: steps[1].description, step: 2, delay: 2400000 }, // 20 minutes for initiating analysis
      { text: steps[2].description, step: 3, delay: 10000 }, // 17 minutes for checking content
      { text: steps[3].description, step: 4, delay: 10000 }, // 10 seconds for finalizing
      { text: "التحليل اكتمل بنجاح", step: 4, delay: 5000 }, // 5 seconds for displaying completion message
    ];

    let messageIndex = 0;
    let interval;

    const setNextMessage = () => {
      if (messageIndex < messages.length) {
        setProgressMessage(messages[messageIndex].text);
        setActiveStep(messages[messageIndex].step);
        const delay = messages[messageIndex].delay;
        messageIndex++;
        interval = setTimeout(setNextMessage, delay);
      } else {
        setOpenModal(true);
        clearTimeout(interval);
      }
    };

    interval = setTimeout(setNextMessage, messages[messageIndex].delay);

    return () => clearTimeout(interval);
  }, []);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    window.location.href = 'http://localhost:3000/AnalysisCompletepage';
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Box display="flex" justifyContent="space-between" alignItems="center" my={2}>
          <Tooltip title="الرجوع" arrow>
            <IconButton onClick={() => window.history.back()} aria-label="الرجوع">
              <ArrowBackIcon />
            </IconButton>
          </Tooltip>
          <TextField
            select
            label="اللغة"
            value={language}
            onChange={handleLanguageChange}
            variant="outlined"
            size="small"
          >
            {languages.map((option) => (
              <MenuItem key={option.code} value={option.code}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <StyledPaper elevation={3}>
          <Typography variant="h3" component="h1" gutterBottom color="primary">
            {language === 'ar' ? 'تحميل و تحليل الكتاب قيد التقدم' : 'Book Analysis in Progress'}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {language === 'ar'
              ? `يتم حاليًا رفع كتابك و تحليله. يرجى الانتظار لأن هذا قد يستغرق بضع دقائق.`
              : `Your uploaded book is currently being uploaded for analysis. Please wait as this may take a few minutes.`}
          </Typography>

          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((step, index) => (
              <Step key={index}>
                <StepLabel>{language === 'ar' ? step.label : step.label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Box sx={{ width: '100%', mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <Fade in={showProgress} timeout={1000}>
              <CircularProgress size={60} color="primary" />
            </Fade>
            <Fade in={showProgress} timeout={2000}>
              <Typography variant="body2" sx={{ mt: 2 }} color="textSecondary">
                {progressMessage}
              </Typography>
            </Fade>
            <Grow in={showProgress} timeout={3000}>
              <CustomLinearProgress variant="indeterminate" />
            </Grow>
          </Box>

          <Typography variant="body2" gutterBottom sx={{ mt: 4 }}>
            {language === 'ar'
              ? 'يتحقق التحليل من المحتوى السياسي المتطرف والعنصرية والتمييز الديني والمحتوى الجنسي وأي نص قد يكون موجودًا في مصادر أخرى للتأكد من أن المحتوى الخاص بك أصلي.'
              : 'The analysis checks for extreme political content, racism, religious discrimination, sexual content, and any text that might be found in other sources to ensure your content is original.'}
          </Typography>

          <Tooltip title="اكمال عملية التحليل" arrow>
            <Button
              variant="outlined"
              sx={{
                mt: 3,
                px: 5,
                color: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: theme.palette.secondary.main,
                  color: theme.palette.primary.main,
                },
              }}
              onClick={() => window.location.href = 'http://localhost:3000/AnalysisCompletePage'}
            >
              {language === 'ar' ? 'إنهاء' : 'Finish'}
            </Button>
          </Tooltip>
        </StyledPaper>

        <Modal
          open={openModal}
          onClose={handleCloseModal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openModal}>
            <Box sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
            }}>
              <Typography variant="h6" component="h2">
                {language === 'ar' ? 'التحليل اكتمل!' : 'Analysis Complete!'}
              </Typography>
              <Typography sx={{ mt: 2 }}>
                {language === 'ar' ? 'تم تحليل كتابك بنجاح. يمكنك الآن الاطلاع على النتائج.' : 'Your book has been successfully analyzed. You can now view the results.'}
              </Typography>
              <Button onClick={handleCloseModal} sx={{ mt: 2 }}>
                {language === 'ar' ? 'عرض النتائج' : 'View Results'}
              </Button>
            </Box>
          </Fade>
        </Modal>

        <Tooltip title="هل تحتاج إلى مساعدة؟" arrow>
          <IconButton color="primary" sx={{ position: 'fixed', bottom: 16, right: 16 }}>
            <HelpOutlineIcon />
          </IconButton>
        </Tooltip>
      </Container>
    </ThemeProvider>
  );
};

export default BookAnalysis;
