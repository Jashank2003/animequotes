import React from 'react'
import { useState } from 'react'
import '../App.css'
import ghost  from '../Ghost.gif'


export default function Random() {

   const [mquote , setquote] = useState("");
   const [manime , setAnime] = useState("");
   const [mcharacter , setcharacter ] = useState("");

  
   const showloader=()=> {
      
    var change = document.getElementById('loader');
      change.style.display = 'inline';
      
    }
   const noloader=()=> {
      
    var change = document.getElementById('loader');
      change.style.display = 'none';
      
    }

   const updatequote = async () => {
    // runs after rendering
    showloader();
    // let url = `/apii/api/random`;
     let url = `https://animechan.xyz/api/random`;

    // let proxyUrl = "https://cors-anywhere.herokuapp.com/";
    // let apiUrl = "https://animechan.xyz/api/random";
    // let url = proxyUrl + apiUrl;
    //
    let data = await fetch(url);
    let parseData = await data.json(); 
    setquote(parseData.quote);
    setAnime(parseData.anime);
    setcharacter(parseData.character);
    noloader();
  };

  // useEffect(() => {
  //   updateNews();
  
  // }, []);

  return (
    <>  
        <div id="home">

        <div className="heading">
        <h1  className=''>Get Random quotes From Anime</h1>
        <button className='btn' onClick={updatequote}> Get a quote</button>
        </div>
        

          <div className="box">
            <div className='contentbox'> <h2>"{mquote}"</h2>
          <div id='loader'>
            <img style={{width:'40px',display:'inline'}} src={ghost} alt="loading" />
          </div>
          </div>
            <div><h2 className='showcase'>Anime:{manime}</h2> </div>
            <div><h2 className='showcase'>Character:{mcharacter}</h2> </div>
            

          </div>
        
       
        </div>
    </>
  )
}