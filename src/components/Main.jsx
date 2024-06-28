import React from 'react';
import Navigation from './Navigation.jsx';
import Wallpaper from '../assets/wallpaper.jpg';
import Search from './Search.jsx';
import Carousel from './Carousel.jsx';

const Main = () => {
  return (
    <div className='bg-no-repeat bg-center bg-cover h-screen w-screen pt-4 pb-10 pl-16 pr-16 flex flex-col items-center relative'
         style={{
           backgroundImage: `url(${Wallpaper})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat'
         }}>
      <Navigation />
      <Search />
      <Carousel />
    </div>
  );
}

export default Main;
