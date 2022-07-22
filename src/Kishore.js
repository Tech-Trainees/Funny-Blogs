import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import gif1 from './images/gif1.gif'; 

function Kishore() {
  return (
    <div>
        <Header/>
        <div className='topline'>In This Blog We can get the Yaswanth Information.</div>
        <img src={gif1}/>
        <div className='rightsidecontent'>
            <div className='rightsidecontentpara'>
                <div>
            <p>	
Hey, I’m Dan! Obsessed with exploring the world, meeting new people and getting as lost as possible with my camera. I was on the road for 1467 days between 2014 – 2018, taking a chance on changing my career from restaurant manager to capturing the world and somehow it all worked out… I’m now starting a new chapter living in Portugal. </p></div>
<div>
<p>I hope this site gives you some inspiration (and handy tips) to go and chase your own adventures. Travel is the best kind of education so go get lost, even if it’s just outside your own doorstep!</p></div>
</div>
        </div>
        <Footer/>
    </div>
    );
}

export default Kishore;
