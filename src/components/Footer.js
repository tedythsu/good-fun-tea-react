import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
// import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ margin: '0px 50px'}}>
      <Divider></Divider>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6} md={2}>
          <Item sx={{ color: "black", fontWeight: 'bold' }}>商店訊息</Item>
          <Item><Link href="#" color="inherit" underline="hover">常見問題</Link></Item>
          <Item><Link href="#" color="inherit" underline="hover">關於我們</Link></Item>
          <Item><Link href="#" color="inherit" underline="hover">配送說明</Link></Item>
          <Item><Link href="#" color="inherit" underline="hover">政策條款</Link></Item>
        </Grid>
        <Grid item xs={6} md={2}>
          <Item sx={{ color: "black", fontWeight: 'bold' }}>客戶服務</Item>
          <Item><Link href="#" color="inherit" underline="hover">訂單查詢</Link></Item>
          <Item><Link href="#" color="inherit" underline="hover">商品退換貨</Link></Item>
          <Item><Link href="#" color="inherit" underline="hover">填寫匯款單</Link></Item>
        </Grid>
        <Grid item xs={6} md={2}>
        <Item sx={{ color: "black", fontWeight: 'bold' }}>會員中心</Item>
          <Item><Link href="#" color="inherit" underline="hover">訂購紀錄</Link></Item>
          <Item><Link href="#" color="inherit" underline="hover">願望清單</Link></Item>
          <Item><Link href="#" color="inherit" underline="hover">商品比較</Link></Item>
          <Item><Link href="#" color="inherit" underline="hover">訂閱電子報</Link></Item>
        </Grid>
        <Grid item xs={6} md={6}>
          <Item sx={{ color: "black", fontWeight: 'bold' }}>服務電話</Item>
          <Item>XX-XXXX-XXXX</Item>
          <Item sx={{ color: "black", fontWeight: 'bold' }}>服務信箱</Item>
          <Item>gdfuntea@gmail.com</Item>
          <Item sx={{ color: "black", fontWeight: 'bold' }}>地址</Item>
          <Item>XX市XX區XX街XX號</Item>
        </Grid>
      </Grid>
      
      <Typography sx={{ fontSize: { xs: "10px", md: "15px" } }} gutterBottom component="div" marginTop="25px" align="center">
      © 2022 Good Fun Tea, All Rights Reserved
      </Typography>
    </Box>
    
  );
}
