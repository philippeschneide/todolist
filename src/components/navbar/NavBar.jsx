// src/components/navbar/NavBar.jsx
import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed"> {/* Keep fixed for consistent layout */}
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NotesCraft
          </Typography>

          {/* Navigation Buttons */}
          <Button color="inherit" component={RouterLink} to="/">Home</Button>
          <Button color="inherit" component={RouterLink} to="/todo">Todo</Button>
          <Button color="inherit" component={RouterLink} to="/notes">Notes</Button>
          <Button color="inherit" component={RouterLink} to="/login">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
