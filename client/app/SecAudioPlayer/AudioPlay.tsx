import React, { useState, useEffect, useRef } from 'react';
import { Box, Slider, Button, Typography, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUp from '@mui/icons-material/VolumeUp';
import VolumeDown from '@mui/icons-material/VolumeDown';

const AudiobookPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(50); // Initial volume at 50%
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);

    const audioSrc = '/api/StreamAudio?filename=Anthem.mp3'; // Your audio file endpoint

    // Toggle play/pause
    const handlePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    // Update volume
    const handleVolumeChange = (event, newValue) => {
        setVolume(newValue);
        if (audioRef.current) {
            audioRef.current.volume = newValue / 100;
        }
    };

    // Seek in the audio
    const handleSeek = (event, newValue) => {
        if (audioRef.current) {
            audioRef.current.currentTime = newValue;
        }
    };

    // Update component state from audio metadata
    useEffect(() => {
        const audio = audioRef.current;

        const updateProgress = () => {
            setCurrentTime(audio.currentTime);
            setDuration(audio.duration);
        };

        if (audio) {
            audio.addEventListener('loadedmetadata', updateProgress);
            audio.addEventListener('timeupdate', updateProgress);
        }

        return () => {
            if (audio) {
                audio.removeEventListener('loadedmetadata', updateProgress);
                audio.removeEventListener('timeupdate', updateProgress);
            }
        };
    }, []);

    return (
        <Box sx={{ width: '100%', maxWidth: 480, mx: 'auto', p: 3 }}>
            <Typography variant="h6" gutterBottom>
                Audiobook Player
            </Typography>
            <audio ref={audioRef} src={audioSrc} preload="metadata" />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <IconButton onClick={handlePlayPause}>
                    {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                </IconButton>
                <Slider
                    size="small"
                    value={currentTime}
                    min={0}
                    step={1}
                    max={duration || 100}
                    onChange={handleSeek}
                    sx={{ flexGrow: 1 }}
                />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
                <VolumeDown />
                <Slider value={volume} onChange={handleVolumeChange} aria-labelledby="continuous-slider" />
                <VolumeUp />
            </Box>
            <Typography variant="caption">
                {new Date(currentTime * 1000).toISOString().substr(14, 5)} / {new Date(duration * 1000).toISOString().substr(14, 5)}
            </Typography>
        </Box>
    );
};

export default AudiobookPlayer;
