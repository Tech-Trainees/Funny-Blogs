import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Avatar from '@mui/material/Avatar';
import tesla from './images/tesla.jpeg';


function Home() {
  return (
    <div>
        <Header/>
        <div className='topline'>In This Home page We can get the brief information on some random topics.</div>
        <div className='information'>
        <div className='person1'>
            <div className='avatarpic'>
            <a href='http://localhost:3000/Shiva'><Avatar alt="Remy Sharp" src={tesla} sx={{ width: 200, height: 200 }} /></a>
        </div>
        <div className='paralines'>
        <a href='http://localhost:3000/Shiva'><p>E.Kishore</p></a>
            <p>Today our guest  is E.Kishore  present studing Btech<a href='http://localhost:3000/Shiva'>Read More ......!</a></p>
            </div>
        </div>
        <div className='person1'>
            <div className='avatarpic'>
            <Avatar alt="Remy Sharp" src={tesla} sx={{ width: 200, height: 200 }} />
        </div>
        <div className='paralines'>
            <p>CH.Yaswanth</p>
            <p>Today our guest  is Yaswanth  present studing Btech Read More ......</p>
            </div>
        </div>
        <div className='person1'>
            <div className='avatarpic'>
            <a href='http://localhost:3000/Shiva'><Avatar alt="Remy Sharp" src={tesla} sx={{ width: 200, height: 200 }} /></a>
        </div>
        <div className='paralines'>
        <a href='http://localhost:3000/Shiva'><p>Sukumar</p></a>
            <p>Today our guest  is E.Kishore  present studing Btech <a href='http://localhost:3000/Shiva'>Read More ......!</a></p>
            </div>
        </div>
        <div className='person1'>
            <div className='avatarpic'>
            <a href='http://localhost:3000/naidu'><Avatar alt="Remy Sharp" src='gif9.gif' sx={{ width: 200, height: 200}} /></a>
        </div>
        <div className='paralines'>
        <a href='http://localhost:3000/naidu'> <p>Naidu</p></a>
            <p>Today our guest  is naidu working as Reactjs developer in Techouts <a href='http://localhost:3000/naidu'> Read More ......</a></p>
            </div>
        </div>
        <div className='person1' >
            <div className='avatarpic'>
            <a href='http://localhost:3000/Shiva'><Avatar alt="Remy Sharp" src={tesla} sx={{ width: 200, height: 200 }} /></a>
        </div>
        <div className='paralines'>
        <a href='http://localhost:3000/Shiva'><p>Premkumar</p></a>
            <p>Today our guest  is E.Kishore  present studing Btech <a href='http://localhost:3000/kishore'>Read More ......!</a></p>
            </div>
        </div>
        <div className='person1'>
            <div className='avatarpic'>
        <Avatar alt="Remy Sharp" src={tesla} sx={{ width: 200, height: 200}} />
        </div>
        <div className='paralines'>
            <p>Nagesh</p>
            <p>Today our guest  is Yaswanth  present studing Btech Read More ......</p>
            </div>
        </div>
        <div className='person1'>
            <div className='avatarpic'>
        <Avatar alt="Remy Sharp" src={tesla} sx={{ width: 200, height: 200}} />
        </div>
        <div className='paralines'>
            <p>Harshith</p>
            <p>Today our guest  is Yaswanth  present studing Btech Read More ......</p>
            </div>
        </div>
        </div>
        <Footer/>
    </div>
    );
}

export default Home;
