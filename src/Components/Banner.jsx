import React from 'react';
import { MdMenu } from 'react-icons/md';

const Banner = () => {
  return (
    <div className='movieCategories'>
      <div className='menuIcon'> <MdMenu size={30} color='black' /> </div>
      <div className='content'>
        <button className='teluguMovies'>Telugu</button>
        <button className='englishMovies'>English</button>
        <button className='hindiMovies'>Hindi</button>
        <button className='animeMovies'>Anime</button>
        <button className='webseries'>Webseries</button>
      </div>
    </div>
  );
};

export default Banner;