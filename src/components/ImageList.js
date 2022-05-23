import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Noto Serif TC, cursive",
  },
  li: {
    textDecoration: "none",
  },
});

//sx={{ letterSpacing: { xs: 1, md: 6, lg: 7}  }}

export default function TitlebarBelowImageList() {
  return (
    <ThemeProvider theme={theme}>
      <ImageList sx={{ margin: { xs: "10px", sm: "20px" } }}>
        {itemData.map((item) => (
          // <a href={item.title} target="_blank" rel="noopener noreferrer">
          <ImageListItem
            key={item.img}
            sx={{
              margin: { xs: "5px", md: "20px" },
              textDecoration: "none",
              color: "black",
              "&:hover": {
                color: "#E3C16F",
                transform: "scale(1.1)",
                transition: "500ms"
              },
            }}
            component="a"
            href={item.title}
          >
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              // subtitle={<span>by: {item.author}</span>}
              position="below"
              align="center"
            />
            {/* <Stack direction="row" spacing={1} justifyContent="center">
            <Button variant="contained" color="success" endIcon={<ShoppingBagIcon />}>
              加入購物車
            </Button>
          </Stack> */}
          </ImageListItem>
          // </a>
        ))}
      </ImageList>
    </ThemeProvider>
  );
}

const itemData = [
  {
    img: "https://unsplash.com/photos/m-gqDRzbJLQ/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjUyNDUzNjA1&force=true&w=1920",
    title: "包種茶",
    author: "@bkristastucchio",
  },
  {
    img: "https://unsplash.com/photos/waTzoTvrFFs/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjUyNDU1NzU2&force=true&w=1920",
    title: "東方美人茶",
    author: "@nolanissac",
  },
  {
    img: "https://unsplash.com/photos/L82-kkEBOd0/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NTN8fHRlYXxlbnwwfHx8fDE2NTI0NDk4MDk&force=true&w=1920",
    title: "金萱茶",
    author: "@arwinneil",
  },
  {
    img: "https://unsplash.com/photos/cmWUcVSJWOw/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjUyNDU1Njkx&force=true&w=1920",
    title: "鐵觀音茶",
    author: "@katie_wasserman",
  },
  {
    img: "https://unsplash.com/photos/bAzDhilQFsA/download?force=true&w=1920",
    title: "台茶十八號",
    author: "@silverdalex",
  },
  {
    img: "https://unsplash.com/photos/K3ymmfqBQzM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MzV8fHRlYXxlbnwwfHx8fDE2NTI0MDA5MjA&force=true&w=1920",
    title: "阿里山茶",
    author: "@shelleypauls",
  },
];
