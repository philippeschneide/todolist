import { styled } from '@mui/material/styles';
import { AppBar, Typography } from '@mui/material';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: 'fixed',
}));

export const NavTitle = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
}));