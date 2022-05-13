import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { ThemeProvider, createMuiTheme } from '@mui/material/styles';

const theme = createMuiTheme({
//   typography: {
//     fontFamily: [
//       'Noto Serif TC',
//       'cursive',
//     ].join(','),
//   },
});

  theme.typography.h3 = {
    fontSize: '1.2rem',
    fontFamily: [
        'Noto Serif TC',
        'cursive',
      ].join(','),
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
    },
  };

  theme.typography.overline = {
    fontSize: '0.7rem',
    fontFamily: [
        'Noto Serif TC',
        'cursive',
      ].join(','),
    '@media (min-width:600px)': {
      fontSize: '0.9rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
  };

export default function Types() {
  return (
    <Box sx={{ width: '100%', maxWidth: 500, margin:'auto', letterSpacing: 12 }}>
      <ThemeProvider theme={theme}>
      <Typography variant="h3" gutterBottom component="div" marginTop="75px" align="center">
        古風茶創六大商品
      </Typography>
      <Typography sx={{ letterSpacing: { xs: 1, md: 6, lg: 7}  }} variant="overline" display="block" gutterBottom align="center" color="warning.dark">
        用心堅持，把每一滴味道做到最好
      </Typography>
      </ThemeProvider>
    </Box>
  );
}
