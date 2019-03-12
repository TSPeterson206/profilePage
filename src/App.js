import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="row mainColumns">
        <div className="col-2">
          <header className="columnHeader">About</header>
          <p>I am a software engineer that specializes in full-stack application development and I reside in the Seattle
          area. Feel to peruse my portfolio and resume, then get ahold of me via any of the links below.</p>
        </div>
          <div className="col-2">
          <header className="columnHeader">Resume</header>

          <img src="https://www.dropbox.com/s/vn9xz1ktniba30l/profileSiteResume.png" />
          </div>
          <div className="col-4 titleColumn">
          <div className="App">
            <p className="titleName titles">Toby Peterson</p>
            <p className="titleTitle titles">Software Engineer</p>
          <img className="headshot" src="https://tobypeterson.surge.sh/Toby_Peterson.png" alt="headshot"></img>
          </div>
          </div>
          <div className="col-2">
          <header className="columnHeader">Projects</header>
          </div>
          <div className="col-2 contactColumn">
          <header className="columnHeader">Contact</header>
          <div id="ButtonBarDivUnit" class="ButtonBarDiv">
  <div id="imagecontainer">
  <div>
  <a href="https://github.com/TSPeterson206"><img type="image" src="https://tobypeterson.surge.sh/icons8-github-filled-200.png"
    /></a>
  </div>
  <div>
  <a href="https://www.linkedin.com/in/toby-peterson"><img type="image" src="https://tobypeterson.surge.sh/icons8-linkedin-filled-200.png"
    /></a>
  </div>
  <div>
  <a href="mailto:tspeterson206@gmail.com"><img type="image" src="https://tobypeterson.surge.sh/icons8-gmail-filled-200.png"
    /></a>
  </div>
  </div></div>
        </div>
      </div>
    );
  }
}

export default App;





{/* <a href="https://github.com/TSPeterson206"><img className="profileContactLogo" src="https://tobypeterson.surge.sh/icons8-github-90.png"/></a><br></br>
            </div>
            <div className="icons">
            <a href="https://www.linkedin.com/in/toby-peterson"><img className="profileContactLogo" src="https://tobypeterson.surge.sh/icons8-linkedin-90.png"/></a>
            </div>
            <div className="icons">
            <a href="mailto:tspeterson206@gmail.com"><img className="profileContactLogo" src="https://tobypeterson.surge.sh/icons8-gmail-90.png"/></a> */}