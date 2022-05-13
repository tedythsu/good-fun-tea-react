import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Types() {
  return (
    <Box sx={{  width: '100%', maxWidth: 500, margin:'auto' }}>
      
      <Typography variant="h4" gutterBottom component="div" marginTop="75px" align="center">
        古風茶創六大商品
      </Typography>
     
      
      <Typography variant="overline" display="block" gutterBottom align="center" color="warning.dark">
        用心堅持，把每一滴味道做到最好
      </Typography>
    </Box>
  );
}
