import React, { useState, useEffect, useRef } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Slider,
  styled,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
  Grid,
  Paper,
  IconButton
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUp from '@mui/icons-material/VolumeUp';
import VolumeDown from '@mui/icons-material/VolumeDown';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import NavBar from 'C:/Users/Youssef Tarek/Documents/GarduationProject/client/app/Navbar/NavBar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#fb8c00',
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: '#212121',
      secondary: '#fb8c00',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px',
          boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .1)',
        },
      },
    },
  },
});

const InputFile = styled('input')({
  display: 'none',
});

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const AudiobookPlayer: React.FC = () => {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState<number>(50); // Default volume set to 50%
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [audioDuration, setAudioDuration] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
      const updateProgress = () => {
        setCurrentTime(audioRef.current!.currentTime);
        setAudioDuration(audioRef.current!.duration);
      };
      audioRef.current.addEventListener('timeupdate', updateProgress);

      return () => audioRef.current?.removeEventListener('timeupdate', updateProgress);
    }
  }, [volume]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((err) => console.error('Error playing audio:', err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setAudioFile(files[0]);
      const audioSrc = URL.createObjectURL(files[0]);
      if (audioRef.current) {
        audioRef.current.src = audioSrc;
        audioRef.current.load();
        audioRef.current.onloadedmetadata = () => {
          setAudioDuration(audioRef.current!.duration);
          setIsPlaying(false);
        };
      }
    }
  };

  const handleVolumeChange = (event: Event, newValue: number | number[]) => {
    setVolume(newValue as number);
  };

  const handleSeek = (event: Event, newValue: number | number[]) => {
    const newTime = newValue as number;
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <>
      <NavBar />
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm" sx={{ py: 4 }}>
          <Paper elevation={3}>
            <Typography variant="h5" color="secondary">
              الكتب الصوتية 
            </Typography>
            <IconButton color="primary" aria-label="upload picture" component="label">
              <input hidden accept="audio/*" type="file" onChange={handleFileChange} />
              <AudiotrackIcon sx={{ fontSize: 60 }} />
            </IconButton>
            <Typography variant="subtitle1" color="textSecondary">
              {audioFile?.name || "اختيار ملف"}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
              <IconButton onClick={handlePlayPause}>
                {isPlaying ? <PauseIcon fontSize="large" /> : <PlayArrowIcon fontSize="large" />}
              </IconButton>
            </Box>
            <Grid container spacing={2} alignItems="center" sx={{ mt: 2, mb: 1 }}>
              <Grid item>
                <VolumeDown />
              </Grid>
              <Grid item xs>
                <Slider value={volume} onChange={handleVolumeChange} aria-labelledby="input-slider" />
              </Grid>
              <Grid item>
                <VolumeUp />
              </Grid>
            </Grid>
            <Slider
              size="small"
              value={currentTime}
              min={0}
              step={1}
              max={audioDuration}
              onChange={handleSeek}
              sx={{ mb: 2 }} />
            <Typography variant="body2">
              {formatTime(currentTime)} / {formatTime(audioDuration)}
            </Typography>
            <audio ref={audioRef} onLoadedMetadata={() => setIsPlaying(false)} onEnded={() => setIsPlaying(false)} />
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default AudiobookPlayer;
