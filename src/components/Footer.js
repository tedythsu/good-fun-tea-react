import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
}));

//sx={{ margin: { xs: "10px", sm: "20px" } }}

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ margin: '0px 50px'}}>
      <Divider></Divider>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6} md={2}>
          <Item sx={{ color: "black", fontWeight: 'bold' }}>商店訊息</Item>
          <Item>常見問題</Item>
          <Item>關於我們</Item>
          <Item>配送說明</Item>
          <Item>政策條款</Item>
        </Grid>
        <Grid item xs={6} md={2}>
          <Item sx={{ color: "black", fontWeight: 'bold' }}>客戶服務</Item>
          <Item>訂單查詢</Item>
          <Item>商品退換貨</Item>
          <Item>填寫匯款單</Item>
        </Grid>
        <Grid item xs={6} md={2}>
        <Item sx={{ color: "black", fontWeight: 'bold' }}>會員中心</Item>
          <Item>訂購紀錄</Item>
          <Item>願望清單</Item>
          <Item>商品比較</Item>
          <Item>訂閱電子報</Item>
        </Grid>
        <Grid item xs={6} md={6}>
          <Item>服務電話 | XX-XXXX-XXXX</Item>
          <Item>服務信箱 | gdfuntea@gmail.com</Item>
          <Item>地址 | XX市XX區XX街XX號</Item>
        </Grid>
      </Grid>
      
      <Typography sx={{ fontSize: { xs: "10px", md: "15px" } }} gutterBottom component="div" marginTop="25px" align="center">
      © 2022 Good Fun Tea, All Rights Reserved
      </Typography>
    </Box>
    
  );
}
