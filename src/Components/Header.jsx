import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'>
        <div className='Top'>
            <div className='title'>
               <h1>MOVIES HUB</h1> 
            </div>
        </div>
        <div className='right'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>#Trending</li>
                <li>News</li>
            </ul>
        </div>
        <div className='search'>
            <input type='text' placeholder='Search'></input>
            <button>Search</button>
        </div>

    </div>
  )
}

export default Header