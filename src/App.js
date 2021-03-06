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
      <div className="col-lg-4 col-sm-12 titleColumn">
          <div className="App">
            <p className="titleName titles">Toby Peterson</p>
            {this.state.profilePic ? <div><p className="titleTitle titles">Software Engineer</p><img className="headshot" src={headshot} alt="headshot"></img></div>:null}
            {this.state.project === 1 ? <Project1/> : null}
            {this.state.project === 2 ? <Project2/> : null}
            {this.state.project === 3 ? <Project3/> : null}
            {this.state.project === 4 ? <Project4/> : null}
            {this.state.project === 5 ? <Project5/> : null}
          </div>
          </div>
        <div className="col-sm-12 col-lg-2 aboutColumn">
          <header className="columnHeader">About</header>
          <p className="aboutSection" >&emsp;
          <ul>
         <li>I am a software engineer who specializes in full-stack web development and I reside in the Seattle
          area</li>
          <li> I love figuring out how things work. I am a lifelong learner to the core</li>
          <li> I can carry on excessively long conversations about 90s music, upon request</li>
          <li> I am tall and can reach things in high places. I am willing to do this for you</li>
          <li> I have permanently memorized the 12 things that an Eagle Scout is and can recite on command</li>
          <li> I can add value to the office environment via workplace-appropriate movie quotes</li>
          <li> I am ranked in the top 2% honor percentile on codewars.com</li>
          <li> I value work ethic, perserverance, teamwork and positivity above all else</li>
          <li> I thoroughly enjoy cooking</li>
          <li> I live to code, debug, build, modify, overhaul, learn and collaborate</li>
          </ul>
          </p>
       
        </div>
          <div className="col-lg-2 col-sm-12 resumeColumn">
          <header className="columnHeader">Resume</header>
          <div id="ButtonBarDivUnit" className="ButtonBarDiv">
          <div id="imagecontainer">
          <div className="content">
          <p className="resumeWrapText">Click</p><br></br>
          <a href="https://docs.google.com/document/d/1YlX9Y6FPrwSppSuIG-GX5yksfBAXQivBcSrmyVQGRQs/edit?usp=sharing"><img className="resumePic" src={resumePic} alt="resumePic"/></a>
          <p className="resumeWrapText">Me!</p>
          </div>
          </div>
          <p className="skills">Skills/Tech/Certs</p>
        <ul className="skillsList">
          <li>JavaScript (ES6)</li>
          <li>React.js + Redux</li>
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
          <li>TDD</li>
          <li>Agile</li>
          <li>Cert: CompTIA A+</li>
          <li>Cert: AWS Cloud Practitioner</li>
        </ul>
          </div>
          </div>
          <div className="col-lg-2 col-sm-12">
          <header className="columnHeader">Projects</header>
          <p className="projectsHidden">(After selecting, scroll up to see summary/links)</p>
          <div className="projectsSection">
          <a onClick={()=>{this.showProject(1)}} className="project"><p className="projectHeader">NextSteps</p></a>
          <div className="content">
          <a onClick={()=>{this.showProject(1)}} className="project"><img className="projectPic project" src={nextstepscreenshot} alt="projectPic"/></a>
          </div>
          <a onClick={()=>{this.showProject(2)}} className="project"><p className="projectHeader">Squeaker</p></a>
          <div className="content">
          <a onClick={()=>{this.showProject(2)}} className="project"><img className="projectPic project" src={squeakerscreenshot} alt="projectPic" /></a>
          </div>
          <a onClick={()=>{this.showProject(3)}} className="project"><p className="projectHeader">$5 Bookstore</p></a>
          <div className="content">
          <div onClick={()=>{this.showProject(3)}} className="project"><img className="projectPic project" src={fivedollarscreenshot} alt="projectPic" /></div>
          </div>
          <a onClick={()=>{this.showProject(4)}} className="project"><p className="projectHeader">BuyBonsai</p></a>
          <div className="content">
          <div onClick={()=>{this.showProject(4)}} className="project"><img className="projectPic project" src={buybonsaiscreenshot} alt="projectPic" /></div>
          </div>
          <a onClick={()=>{this.showProject(5)}} className="project"><p className="projectHeader">MyRecovery</p></a>
          <div className="content">
          <div onClick={()=>{this.showProject(5)}} className="project"><img className="projectPic project" src={myrecoveryscreenshot} alt="projectPic" /></div>
          </div>
          </div>
          </div>
          <div className="col-lg-2 col-sm-12 contactColumn">
          <header className="columnHeader">Contact</header>
          <div className="contactIcons">
<div className="content">
  <a href="https://github.com/TSPeterson206" target="Toby's GitHub"><img className="contactImg" type="image" alt="contactIconImage" src={gitLogo}
    /></a>
</div>
  <div className="content">
  <a href="https://www.linkedin.com/in/toby-peterson" target="Toby's LinkedIn"><img className="contactImg" type="image" alt="contactIconImage" src={linkedLogo}
    /></a>
    </div>
  <div className="content">
  <a href="mailto:tspeterson206@gmail.com" ><img className="contactImg" type="image" alt="contactIconImage" src={mailLogo}
    /></a>
    </div>
    </div>
  </div>
        </div>
    );
  }
}

export default App;