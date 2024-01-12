import React from 'react'
import '../App.css'
import { useEffect } from 'react';
// import logo from '../icon.png'
export default function Navbar() {

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <>
    <div>
    <nav className='navbar'>
      <ul>
      {/* <img src={logo} alt="loading" /> */}
        <li><a href="#home">Home</a></li>
        <li><a href="#animetitle"> By anime title</a></li>
        <li><a href="#animechar"> By anime Character</a></li>
      </ul>
    </nav>  
    </div>
    </>
  )
}