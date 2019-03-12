import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Link } from 'react-router-dom'

import './App.css';

class App extends Component {


connectGit(){

}

  render() {
    return (
      <div className="row mainColumns">
      <div className="col-2">
      <header className="columnHeader">About</header>
      </div>
      <div className="col-2">
      <header className="columnHeader">Resume</header>
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
      <div className="col-2">
      <header className="columnHeader">Contact</header>
      <div>
      
        <a href="https://github.com/TSPeterson206"><img class="profileContactLogo" src="./images/icons8-github-90.png"/></a>

        <a href="https://www.linkedin.com/in/toby-peterson"><img class="profileContactLogo" src="icons8-linkedin-90.png"/></a>
        <a href="mailto:tspeterson206@gmail.com"><img class="profileContactLogo" src="icons8-gmail-90.png"/></a>
        
        {/* <a href="https://www.linkedin.com/in/toby-peterson"><img className="profileContactLogo" src="icons8-linkedin-90.png"></a> */}
        {/* <a href="mailto:tspeterson206@gmail.com"><img classname="profileContactLogo" src="icons8-gmail-90.png"></a> */}
      </div>
      </div>
      </div>
    );
  }
}

export default App;
