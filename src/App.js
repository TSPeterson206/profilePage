import React, { Component } from 'react';
import './App.css';
import gitLogo from './images/icons8-github-filled-200.png'
import linkedLogo from './images/icons8-linkedin-filled-200.png'
import mailLogo from './images/icons8-gmail-filled-200.png'
import resumePic from './images/icons8-resume-100.png'
import headshot from './images/headshot.png'
import nextstepscreenshot from './images/nextstepscreenshot.png'
import squeakerscreenshot from './images/squeakerscreenshot.png'
import fivedollarscreenshot from './images/fivedollarbookstorescreenshot.png'
import buybonsaiscreenshot from './images/buybonsaiscreenshot.png'
import myrecoveryscreenshot from './images/myrecoveryscreenshot.png'
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
      
        <div className="col-sm-6 col-lg-2 aboutColumn">
          <header className="columnHeader">About</header>
          <p>&emsp;I am a software engineer that specializes in full-stack application development and I reside in the Seattle
          area. Feel to peruse my portfolio and resume, then get ahold of me via any of the links below.</p>
       <p className="skills">Skills/Technologies/Certs</p>
        <ul className="skillsList">
          <li>JavaScript (ES6)</li>
          <li>React.js</li>
          <li>React Native</li>
          <li>AWS</li>
          <li>Git (GitHub/BitBucket)</li>
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
          <li>CompTIA A+</li>
          <li>AWS Cloud Practitioner</li>
        </ul>
        </div>
          <div className="col-lg-2 col-sm-6 resumeColumn">
          <header className="columnHeader">Resume</header>
          <div id="ButtonBarDivUnit" class="ButtonBarDiv">
          <div id="imagecontainer">
          <p className="resumeWrapText">Click</p>
          <a href="https://docs.google.com/document/d/1wrH6gtNHXNfw18CzN60gxm0nDQHZsbAIFW-jD-vsabc/edit?usp=sharing"><img className="resumePic" src={resumePic}/></a>
          <p className="resumeWrapText">Me!</p>

          </div>
          </div>
          </div>
          <div className="col-lg-4 col-sm-12 titleColumn">
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
          <div className="col-lg-2 col-sm-8">
          <header className="columnHeader">Projects</header>
          <div onClick={()=>{this.showProject(1)}} className="project">NextSteps<img class="projectPic" src={nextstepscreenshot} /></div>
          <div onClick={()=>{this.showProject(2)}} className="project">Squeaker<img class="projectPic" src={squeakerscreenshot} /></div>
          <div onClick={()=>{this.showProject(3)}} className="project">$5 Bookstore<img class="projectPic" src={fivedollarscreenshot} /></div>
          <div onClick={()=>{this.showProject(4)}} className="project">BuyBonsai<img class="projectPic" src={buybonsaiscreenshot} /></div>
          <div onClick={()=>{this.showProject(5)}} className="project">MyRecovery<img class="projectPic" src={myrecoveryscreenshot} /></div>
          </div>
          <div className="col-lg-2 col-sm-12 contactColumn">
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