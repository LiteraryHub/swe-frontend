import React, { useState } from 'react';
import { Button, Container, Typography, Paper } from '@mui/material';
import { orange } from '@mui/material/colors';
import NavBar from 'C:/Users/Youssef Tarek/Documents/GarduationProject/client/app/Navbar/NavBar';

const UploadPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && (file.type === 'audio/mpeg' || file.type === 'audio/wav' || file.type === 'audio/ogg')) {
      setFile(file);
      setUploadStatus('');
    } else {
      setFile(null);
      alert('Please select an audio file (MP3, WAV, or OGG).');
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select an audio file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('audiofile', file);

    try {
      const response = await fetch('/api/UploadAudio', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        const result = await response.json();
        setUploadStatus(`File uploaded successfully: ${JSON.stringify(result)}`);
      } else {
        throw new Error('Failed to upload file');
      }
    } catch (error: any) {
      setUploadStatus(`Upload failed: ${error.message}`);
    }
  };

  return (
    <>
      <NavBar />
      <Paper elevation={0} square sx={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '20px' }}>
        <Container maxWidth="md" sx={{ marginTop: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: orange[500] }}>
            Upload Audio File
          </Typography>
          <input
            type="file"
            id="upload-button"
            accept="audio/mpeg,audio/wav,audio/ogg"
            onChange={handleFileChange}
            style={{ display: 'none' }} />
          <label htmlFor="upload-button">
            <Button
              variant="contained"
              component="span"
              sx={{
                backgroundColor: orange[500],
                '&:hover': { backgroundColor: orange[700] },
                color: 'white',
                width: '200px',
                height: '50px',
                borderRadius: '25px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                marginBottom: '20px'
              }}
            >
              Choose File
            </Button>
          </label>
          {file && (
            <Typography variant="body1" sx={{ color: '#666', marginBottom: '20px' }}>
              Selected File: {file.name}
            </Typography>
          )}
          <Button
            variant="contained"
            onClick={handleUpload}
            disabled={!file}
            sx={{
              backgroundColor: orange[500],
              '&:hover': { backgroundColor: orange[700] },
              color: 'white',
              width: '200px',
              height: '50px',
              borderRadius: '25px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}
          >
            Upload
          </Button>
          {uploadStatus && (
            <Typography variant="body1" sx={{ color: '#666' }}>
              {uploadStatus}
            </Typography>
          )}
        </Container>
      </Paper>
    </>
  );
};

export default UploadPage;
