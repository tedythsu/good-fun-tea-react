import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

// sx={{ width: 500, height: 450 }}

export default function TitlebarBelowImageList() {
  return (
     <ImageList sx={{ margin: '50px' }}> 
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://unsplash.com/photos/m-gqDRzbJLQ/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjUyNDUzNjA1&force=true&w=1920',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: 'https://unsplash.com/photos/waTzoTvrFFs/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjUyNDU1NzU2&force=true&w=1920',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://unsplash.com/photos/L82-kkEBOd0/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NTN8fHRlYXxlbnwwfHx8fDE2NTI0NDk4MDk&force=true&w=1920',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://unsplash.com/photos/cmWUcVSJWOw/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjUyNDU1Njkx&force=true&w=1920',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://unsplash.com/photos/bAzDhilQFsA/download?force=true&w=1920',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://unsplash.com/photos/K3ymmfqBQzM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MzV8fHRlYXxlbnwwfHx8fDE2NTI0MDA5MjA&force=true&w=1920',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
];
