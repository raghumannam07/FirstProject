import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
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
            <input className='inputSearch' type='text' placeholder='  Search'></input>
            <button>
            <SearchIcon/>
            </button>
        </div>

    </div>
  )
}

export default Header