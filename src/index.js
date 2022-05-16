import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Logo from './components/Logo';
import Header from './components/Header';
import Badge from './components/Badge';
import Carousel from './components/Carousel';
// import reportWebVitals from './reportWebVitals';

import Heading from './components/Heading';
import ImageList from './components/ImageList';

import Drawer from './components/Drawer'

import Appbar from './components/Appbar'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Badge />
    <Drawer />
    <Header /> */}
    <Appbar />
    <Carousel />
    <Heading />
    <ImageList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
