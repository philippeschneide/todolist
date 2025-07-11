import React from 'react';
import { Typography } from '@mui/material';
import { FooterContainer } from './Footer.styles';

const Footer = () => {
  return (
    <FooterContainer component="footer">
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} NotesCraft. All rights reserved.
      </Typography>
    </FooterContainer>
  );
};

export default Footer;