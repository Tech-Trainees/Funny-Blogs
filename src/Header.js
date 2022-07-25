import React from 'react';
import './App.css';
import techoutslogo from './images/techoutslogo.png';

function Header() {
  return (
    <div>
    <div id='header'>
        <div className='techoutslogodiv'>
           <img src={techoutslogo} style={{height:'80px'}} />
        </div>
        <div>
        <p className='homepath'><a href='http://localhost:3000/'>Home</a></p>
        </div>
        <div className='about'>
            <p className='aboutline'>About</p>
            <div className='listnames'>
                <a href='http://localhost:3000/Shiva'>Kishor</a>
                <a>Yaswanth</a>
                <a href='http://localhost:3000/Shiva'>Sukumar</a>
                <a href='http://localhost:3000/naidu'>Naidu</a>
                <a href='http://localhost:3000/Shiva'>Premkumar</a>
                <a>Nagesh</a>
                <a>Harshith</a>
            </div>
        </div>
    </div>

    </div>
    );
}

export default Header;
