import React, { Component } from 'react';
import './App.css';
import gitLogo from './images/icons8-github-filled-200.png'
import linkedLogo from './images/icons8-linkedin-filled-200.png'
import mailLogo from './images/icons8-gmail-filled-200.png'
import resume from './images/profileSiteResume.png'
import resumePic from './images/profileResume.jpg'
import headshot from './images/headshot.png'
import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'
import Project4 from './Project4'
import Project5 from './Project5'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      project:'',
      profilePic:true
    }
  }


  showProject = (id) => {
    this.setState({
      project:id,
      profilePic:null
    })
  }

  render() {
    return (
      <div className="row mainColumns">
      
        <div className="col-2 aboutColumn">
          <header className="columnHeader">About</header>
          <p>&emsp;I am a software engineer that specializes in full-stack application development and I reside in the Seattle
          area. Feel to peruse my portfolio and resume, then get ahold of me via any of the links below.</p>
       <p className="skills">Skills/Technologies/Certs</p>
        <ul className="skillsList">
          <li>JavaScript (ES6)</li>
          <li>React.js</li>
          <li>AWS</li>
          <li>Git</li>
          <li>SQL(PostgreSQL)</li>
          <li>Bootstrap</li>
          <li>Node.js</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JSX</li>
          <li>Express</li>
          <li>Heroku</li>
          <li>JSON</li>
          <li>Full-Stack Engineering</li>
          <li>Responsive Design</li>
          <li>Restful APIs</li>
        </ul>
        </div>
          <div className="col-2 resumeColumn">
          <header className="columnHeader">Resume</header>

          <div id="ButtonBarDivUnit" class="ButtonBarDiv">

          <div id="imagecontainer">


          <a href="https://docs.google.com/document/d/1wrH6gtNHXNfw18CzN60gxm0nDQHZsbAIFW-jD-vsabc/edit?usp=sharing"><img className="resumePic" src={resume}/></a>
          <img className="resumePic" src={resumePic}/>
          </div>
          </div>
          </div>
          <div className="col-4 titleColumn">
          <div className="App">
            <p className="titleName titles">Toby Peterson</p>
            <p className="titleTitle titles">Software Engineer</p>
            {this.state.profilePic ? <img className="headshot" src={headshot} alt="headshot"></img>:null}
            {this.state.project === 1 ? <Project1/> : null}
            {this.state.project === 2 ? <Project2/> : null}
            {this.state.project === 3 ? <Project3/> : null}
            {this.state.project === 4 ? <Project4/> : null}
            {this.state.project === 5 ? <Project5/> : null}
          </div>
          </div>
          <div className="col-2">
          <header className="columnHeader">Projects</header>
          <div onClick={()=>{this.showProject(1)}} className="project">NextSteps</div>
          <div onClick={()=>{this.showProject(2)}} className="project">Squeaker</div>
          <div onClick={()=>{this.showProject(3)}} className="project">$5 Bookstore</div>
          <div onClick={()=>{this.showProject(4)}} className="project">BuyBonsai</div>
          <div onClick={()=>{this.showProject(5)}} className="project">MyRecovery</div>
          </div>
          <div className="col-2 contactColumn">
          <header className="columnHeader">Contact</header>
          <div id="ButtonBarDivUnit" class="ButtonBarDiv">
  <div id="imagecontainer">
  <div>
  <a href="https://github.com/TSPeterson206"><img type="image" src={gitLogo}
    /></a>
  </div>
  <div>
  <a href="https://www.linkedin.com/in/toby-peterson"><img type="image" src={linkedLogo}
    /></a>
  </div>
  <div>
  <a href="mailto:tspeterson206@gmail.com"><img type="image" src={mailLogo}
    /></a>
  </div>
  </div>
  </div>
        </div>
      </div>
    );
  }
}

export default App;