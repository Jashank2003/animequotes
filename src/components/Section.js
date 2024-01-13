import React from "react";
import { useState } from "react";
import "../App.css";
import ghost from "../Ghost.gif";

export default function Section(props) {
  const [mquote, setquote] = useState("");
  const [manime, setAnime] = useState("");
  const [mcharacter, setcharacter] = useState("");
  const [inputValue, setInputValue] = useState("");

  const showloader = () => {
    var change = document.getElementById("loader");
    change.style.display = "inline";
  };
  const noloader = () => {
    var change = document.getElementById("loader");
    change.style.display = "none";
  };

  const updatequote = async () => {
    // runs after rendering
    showloader();
    // const setti = document.getElementById("searchar");
    // console.log(inputValue);
    //  let url = `/apii/api/random/${props.url}=${setti.value}`;
    let url = `https://animechan.xyz/api/random/${props.url}=${inputValue}`;
    try {
      let data = await fetch(url);
  
      if (data.ok) {
        let parseData = await data.json();
        setquote(parseData.quote);
        setAnime(parseData.anime);
        setcharacter(parseData.character);
      } else {
        // Handle the case where the response is not okay (e.g., 404 or 401)
        setquote("Nothing found:< | Make sure Spelling is correct");
        setAnime("");
        setcharacter("");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error fetching data:", error);
      setquote("Error fetching data");
      setAnime("");
      setcharacter("");
    }
    noloader();
  };

  return (
    <>
      <div id={props.wind}>
        <div className="tiheading ">
          <h1 className="">Get Random quotes by Anime {props.head} </h1>
          <input id="searchar" type="text" placeholder={props.head}  value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} />
          <button className="btn" onClick={updatequote}>
            {" "}
            Get a quote
          </button>
        </div>
        <div className={props.box}>
          <div className="contentbox">
            {" "}
            <h2>"{mquote}"</h2>
            <div id="loader">
              <img
                style={{ width: "40px", display: "none" }}
                src={ghost}
                alt="loading"
              />
            </div>
          </div>
          <div>
            <h2 className="showcase">Anime:{manime}</h2>{" "}
          </div>
          <div>
            <h2 className="showcase">Character:{mcharacter}</h2>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
