import React from 'react';
import { Typography } from '@mui/material';
import { HomeContainer } from './HomePage.styles';

const HomePage = () => {
  return (
    <>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to NotesCraft
      </Typography>
      <Typography variant="h5" component="h2" color="text.secondary">
        Your digital notebook for organizing thoughts and ideas
      </Typography>
    </>
  );
};

export default HomePage;
