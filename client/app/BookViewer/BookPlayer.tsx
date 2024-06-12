import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Document, Page, pdfjs } from 'react-pdf';
import NavBar from 'C:/Users/Youssef Tarek/Documents/GarduationProject/client/app/Navbar/NavBar';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const InputFile = styled('input')({
  display: 'none',
});

const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
          primary: {
            main: '#1976d2',
          },
          secondary: {
            main: '#fb8c00',
          },
          background: {
            default: darkMode ? '#121212' : '#fff',
          },
          text: {
            primary: darkMode ? '#fff' : '#212121',
            secondary: darkMode ? '#ccc' : '#757575',
          },
        },
        shape: {
          borderRadius: 8,
        },
      }),
    [darkMode]
  );

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
  };

  const handleFileChange = (event) => {
    setLoading(true);
    setError(null);
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const goToPrevPage = () => setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));
  const goToNextPage = () => setPageNumber((prevPageNumber) => Math.min(prevPageNumber + 1, numPages || prevPageNumber));

  return (
    <>
      <NavBar />
      <ThemeProvider theme={theme}>
        <Container maxWidth="md" sx={{ py: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h4" align="center" gutterBottom>
              قارئ الكتب 
            </Typography>
            <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
          <Box sx={{ mb: 2, textAlign: 'center' }}>
            <label htmlFor="file">
              <InputFile
                accept="application/pdf"
                id="file"
                type="file"
                onChange={handleFileChange}
              />
              <IconButton color="primary" aria-label="upload pdf" component="span">
                <PictureAsPdfIcon sx={{ fontSize: 60 }} />
              </IconButton>
            </label>
          </Box>
          {loading && <Typography variant="body1" align="center">Loading...</Typography>}
          {error && <Typography variant="body1" align="center" color="error">{error}</Typography>}
          {file && (
            <Paper elevation={3} sx={{ p: 2, textAlign: 'center', userSelect: 'none' }} onContextMenu={(e) => e.preventDefault()}>
              <Document
                file={URL.createObjectURL(file)}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={(error) => setError("Failed to load PDF document.")}
              >
                <Page pageNumber={pageNumber} />
              </Document>
              <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ mt: 2 }}>
                <Grid item>
                  <Button
                    startIcon={<ArrowBackIosNewIcon />}
                    onClick={goToPrevPage}
                    disabled={pageNumber <= 1}
                  >
                    السابق 
                  </Button>
                </Grid>
                <Grid item>
                  <Typography>
                    Page {pageNumber} of {numPages}
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    endIcon={<ArrowForwardIosIcon />}
                    onClick={goToNextPage}
                    disabled={pageNumber >= numPages}
                  >
                    التالي
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          )}
        </Container>
      </ThemeProvider>
    </>
  );
};

export default PdfViewer;
