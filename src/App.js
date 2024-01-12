import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Random from './components/Random';
import Section from './components/Section';



function App() {
  return (
   <>
   <div className='wal1'>
    <Navbar/>
      <Random/>
   </div>
   <div id='animetitle'>

      <Section box="tibox" wind="animetitile" head="Title" url="anime?title"/>
   </div>
   <div id='animechar'>

      <Section  box="charbox" wind="animechar" head="Character" url="character?name"/>
   </div>
   </>
  );
}

export default App;