import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Avatar from '@mui/material/Avatar';
import tesla from './images/tesla.jpeg';
import tobi from './images/tobi.gif'
import prem from './images/prem.jpg'
//import Thor from './Thor.jpg'
// import krish from './krish_images/krish.jpg'

function Home() {
  return (
    <div>
        <Header/>
        <div className='topline'>In This Home page We can get the brief information on some random topics.</div>
        <div className='information'>

        <div className='person1'>
            <div className='avatarpic'>
            <a href='http://localhost:3000/krish'><Avatar alt="Remy Sharp" src='./krish_images/krish.jpg' sx={{ width: 200, height: 200 }} /></a>
        </div>
        <div className='paralines'>
        <a href='http://localhost:3000/krish'><p>E.Kishore</p></a>
            <p>Today our guest  is E.Kishore  present studing MCA<a href='http://localhost:3000/krish'>Read More ......!</a></p>
            </div>
        </div>

        <div className='person1' style={{marginLeft:"-57px"}}>
            <div className='avatarpic'>
            <Avatar alt="Remy Sharp" src={tesla} sx={{ width: 200, height: 200 }} />
            </div>
            <div className='paralines'>
            <p>CH.Yaswanth</p>
            <p>Today our guest  is Yaswanth  present studing Btech Read More ......</p>
            </div>
        </div>

        <div className='person1'  style={{marginLeft:"-60px"}}>
            <div className='avatarpic'>
            <a href='http://localhost:3000/sukumar'><Avatar alt="Remy Sharp" src={tobi} sx={{ width: 200, height: 200 }} /></a>
        </div>
        <div className='paralines'>
        <a href='http://localhost:3000/sukumar'><p>Sukumar</p></a>
            <a href='http://localhost:3000/sukumar'>Read More ......!</a>
            </div>
        </div>

        <div className='person1' style={{marginLeft:"-60px"}}>
            <div className='avatarpic'>
            <a href='http://localhost:3000/naidu'><Avatar alt="Remy Sharp" src='gif9.gif' sx={{ width: 200, height: 200}} /></a>
        </div>
        <div className='paralines'>
        <a href='http://localhost:3000/naidu'> <p>Naidu</p></a>
            <p>Today our guest  is naidu working as Reactjs developer in Techouts <a href='http://localhost:3000/naidu'> Read More ......</a></p>
            </div>
        </div>

        <div style={{marginLeft:"120px"}} className='person1'  >
            <div className='avatarpic'>
            <a href='http://localhost:3000/prem-blog'><Avatar alt="Remy Sharp" src={prem} sx={{ width: 200, height: 200 }} /></a>
            </div>
            <div className='paralines'>
            <a href='http://localhost:3000/prem-blog'><p>Premkumar</p></a><p style={{color:"black",opacity:"0.5"}}>Author</p>
            <p>Sample blog about Web Design  <a href='http://localhost:3000/prem-blog'><button>Show</button></a></p>
            </div>
        </div>

        <div className='person1' style={{marginLeft:"50px"}}>
            <div className='avatarpic'>
            <a href='http://localhost:3000/Nagesh'><Avatar alt="Remy Sharp" src='./krish_images/Thor.jpg' sx={{ width: 200, height: 200}} /></a>
            </div>
            <div className='paralines'>
            <p>Nagesh</p>
            <p>Today our guest  is Nagesh present studing Btech Read More ......</p>
            </div>
        </div>

        <div className='person1' style={{marginLeft:"50px"}}>
            <div className='avatarpic'>
            <a href='http://localhost:3000/harshit'>
        <Avatar alt="Remy Sharp" src={tesla} sx={{ width: 200, height: 200}} />
         </a>
        </div>
        <div className='paralines'>
          <a href='http://localhost:3000/harshit'><p>Harshith</p></a>
            
            <p>Today our guest  is Yaswanth  present studing Btech Read More ......</p>
            </div>
        </div>
      
        </div>
        <Footer/>
    </div>
    );
}

export default Home;
