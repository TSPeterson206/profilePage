import React, { Component } from 'react';
import myrecoveryscreenshot from './images/myrecoveryscreenshot.png'


export default class Project5 extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }

  }
  
  render(){
    return (
<div class="container lastContainer">

<a href="http://myrecovery.surge.sh">
  <h2 class="projectTitle">MyRecovery</h2>
</a>
<div class="repos">
  <a href="https://github.com/TSPeterson206/Quarter-1-project">
    <p>GitHub Repo</p>
  </a>
</div>
<p>&emsp;MyRecovery is a tool that allows those in recovery from chemical dependency to not only take pride in the time
  that they have achieved...but also set goals and keep themselves on track to accomplish them. That is where MyRecovery comes in.<br></br><br></br>
  <a href="http://myrecovery.surge.sh"><img class="largeProjectPic" src={myrecoveryscreenshot}/></a><br></br><br></br>

  <div class="features">

  <strong>Features</strong><br></br>
  <ul className="projectFeaturesList">
    <li>Calculate your accrued sober time in days, hours and even minutes!</li>
    <li>Set a goal and enter the contact information for whom you want to keep you accountable. See the remaining
      time left on your goal via the progress bars.</li>
    <li>A library of links to outside resources that can assist in keeping on your path to recovery</li>
    <li>Your goal will remain even when you leave the page and return! Enjoy!</li>
  </ul>
</div>
</p>

</div>
    )
  }
}