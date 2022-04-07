import React, { useState } from "react";
import "./styles.css";

import { genreDictionary } from "./genre";
import { artistDictionary } from "./artist";

import spotify from "/public/images/SpotifyLogo.png";
import linkedin from "/public/images/linkedin.svg";
import twitter from "/public/images/twitter.svg";
import github from "/public/images/github.svg";
import imgurl from "/public/images/home.gif";

const categoryDictionary = {
  Genres: genreDictionary,
  Artist: artistDictionary
};

const categoryList = Object.keys(categoryDictionary);

export default function App() {
  const [currentDictionary, setCurrentDictionary] = useState({});
  const [currentList, setCurrentList] = useState([]);
  const [currentItemList, setCurrentItemList] = useState([]);

  function onClickHandler(item) {
    var inputCategory = item;
    var currentDictTemp = categoryDictionary[inputCategory];
    var list = Object.keys(currentDictTemp);

    setCurrentList(list);
    setCurrentDictionary(currentDictTemp);
  }

  function checkBreak(index) {
    if (index === 1) {
      return "\n\n\n";
    }

    return "";
  }

  function onClickItemHandler(item) {
    setCurrentItemList(currentDictionary[item]);
  }

  return (
    <div className="App">
      <div className="header">
        <div className="navigation">
          <h1 style={{ fontWeight: "bold" }}>GRAMO</h1>
        </div>
      </div>

      <img
        src={imgurl}
        style={{
          margin: "-4rem auto 1rem auto",
          maxWidth: "60%",
          maxheight: "75%",
          padding: "2rem"
        }}
        alt="home"
      />

      <div className="block-body">
        <div className="body-container">
          <small
            style={{
              textAlign: "center",
              fontWeight: "bold",
              marginTop: "1rem"
            }}
          >
            {" "}
            Browse Your BEAT🎵🎵
          </small>

          <div className="hero">
            {categoryList.map((item) => (
              <span
                key={item}
                onClick={() => onClickHandler(item)}
                style={{
                  fontSize: "1.25rem",
                  margin: "0.5rem 1rem",
                  border: "1px solid gray",
                  padding: "0.5rem ",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                  boxShadow: "5px 5px 15px rgba(0,0,0,0.5)"
                }}
              >
                {item}
              </span>
            ))}
          </div>

          <div className="hero-section">
            {currentList.map((item, index) => (
              <button
                key={item}
                onClick={() => onClickItemHandler(item)}
                style={{
                  fontSize: "1.25rem",
                  margin: "1rem 1rem",
                  borderRadius: "10rem",
                  padding: "1rem",
                  cursor: "pointer"
                  // fontFamily: "'Merienda', cursive"
                }}
              >
                {item}
                {checkBreak(index)}
              </button>
            ))}
          </div>

          <div className="body-section">
            {currentItemList.map((item) => (
              <div className="section-album" key={item.link}>
                <div className="section-album-image">
                  <img className="section-image" src={item.imageUrl} alt="" />
                </div>
                <div className="section-album-detail">
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      fontFamily: "'Merienda', cursive"
                    }}
                  >
                    {item.Album}
                  </div>
                  <div style={{ fontWeight: "bold", marginTop: "0.5rem" }}>
                    {item.year}
                  </div>
                  <small>{"Listen On  "} </small>
                  <a href={item.link}>
                    <img
                      style={{
                        marginLeft: "0.5rem",
                        height: "1rem",
                        width: "1rem"
                      }}
                      src={spotify}
                      alt="spotify"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <hr style={{ width: "50%" }} /> */}

      <div className="footer">
        <div className="footer-container" style={{ bottom: "1px" }}>
          <hr style={{ width: "40%" }} />
          <div className="footer-social-link-bar">
            <a
              href="https://www.linkedin.com/in/anuj-kamboj-956130193"
              className="footer-social-link"
            >
              <img src={linkedin} alt="linkedin" />
            </a>

            <a
              href="https://twitter.com/Anuj_27_K"
              className="footer-social-link"
            >
              <img src={twitter} alt="twitter" />
            </a>

            <a
              href="https://github.com/Anuj27aKamboj"
              className="footer-social-link"
            >
              <img src={github} alt="github" />
            </a>
          </div>
          <small style={{ marginTop: "2rem", color: "gray" }}>
            Built with codesandbox.io
          </small>
        </div>
      </div>
    </div>
  );
}
