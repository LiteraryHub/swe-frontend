'use client'
import React from 'react';
import NavBar from './NavBar';


const styled = {
  wrapper: {
    backgroundColor: '#F0F0F0', // Adjusted from 'body' to 'wrapper'
    minHeight: '100vh' // Ensures the wrapper takes up at least the full height of the viewport
  }
};

function Start() {
  return (
    <div style={styled.wrapper}>
      <NavBar />
    </div>
  );
}

export default Start;
