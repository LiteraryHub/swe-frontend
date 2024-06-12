import React, { useState } from 'react';
import { Button, Container, Typography, Paper } from '@mui/material';
import { orange } from '@mui/material/colors';

const UploadPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      setFile(file);
      setUploadStatus('');
    } else {
      setFile(null);
      alert('Please select a DOCX file.');
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    window.location.href = 'http://localhost:3000/AICheckPage'; // Navigate to the success page immediately

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/uploadBook', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        const result = await response.json();
        console.log(`File uploaded successfully: ${JSON.stringify(result)}`);
      } else {
        //throw new Error('Failed to upload file');
      }
    } catch (error: any) {
      //console.error(`Upload failed: ${error.message}`);
      setUploadStatus(`Upload failed: ${error.message}`);
    }
  };

  return (
    <Paper elevation={0} square sx={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '20px' }}>
      <Container maxWidth="md" sx={{ marginTop: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: orange[500] }}>
          رفع كتاب على المنصة
        </Typography>
        <input
          type="file"
          id="upload-button"
          accept=".docx"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
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
            اختيار ملف
          </Button>
        </label>
        {file && (
          <Typography variant="body1" sx={{ color: '#666', marginBottom: '20px' }}>
            الملف المختار: {file.name}
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
          رفع
        </Button>
        {uploadStatus && (
          <Typography variant="body1" sx={{ color: '#666' }}>
            {uploadStatus}
          </Typography>
        )}
      </Container>
    </Paper>
  );
};

export default UploadPage;
