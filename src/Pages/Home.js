import React from "react";
import "./Home.css";
import { BsChevronDoubleDown } from "react-icons/bs";
import Profile from "./Profile";
import Skill from "./Skill";
function Home() {

  function scrolldown(e) {
    e.preventDefault();
    document.body.scrollTop = 1100; // For Safari
    document.documentElement.scrollTop = 1100; // For Chrome, Firefox, IE and Opera
  }

  // Get the button:

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction()
    
  };

  function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      document.getElementById("TopBTN").style.display = "block";
    } else {
      document.getElementById("TopBTN").style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
 


  return (
    <>
      <div className="Homecontainer">
        <div className="main">
          <h1 className="h1Home">
            <div className="HomeAni1">
              <div className="fontupAni1">WELCOME TO MY</div>
            </div>
            <div className="roller">
              <span id="rolltext">
                <div className="fontupAni2">PORTFOLIO</div>
                <br />
              </span>
            </div>
          </h1>
        </div>
        <br />
        <button className="scrolldown" onClick={scrolldown}>
          <BsChevronDoubleDown />
        </button>
        <div >
          <button style={{}} className="myBtn" onClick={topFunction} id="TopBTN" title="Go to top">Top</button>
        </div>
      </div>
      <Profile />
      <Skill/>
    </>
  );
}

export default Home;
