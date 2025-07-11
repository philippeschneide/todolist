import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const FooterContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3, 2),
  marginTop: 'auto',
  backgroundColor: theme.palette.grey[200],
}));