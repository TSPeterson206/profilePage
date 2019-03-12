import React, { Component } from 'react';
import nextstepscreenshot from './images/nextstepscreenshot.png'


export default class Project1 extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }

  }
  
  render(){
    return (
      <div>
<div class="container">

<a href="https://nextstepsapp.herokuapp.com">
  <h2 class="projectTitle">NextSteps</h2>
</a>
<div class="repos">
  <a href="https://github.com/TSPeterson206/capstone-front">
    <p class="repos">GitHub repo: Front End</p>
  </a>
  <a href="https://github.com/TSPeterson206/capstone-back">
    <p>GitHub repo: Back End</p>
  </a>
</div>
<p>
  &emsp;So you've decided to seek treatment enter early recovery...congratulations, but now what?! You have now have a
  handle on your sobriety, but what about all the other areas of your life that were negatively impacted? Enter
  NextSteps.

  NextSteps is a hub for those in recovery that are seeking to increase their support network and take a holistic
  approach towards getting stable and rounding out your healing.<br></br>

  <div class="features">
  <strong>Features</strong><br></br>
  <ul>
    <li>See your total sober time in days, hours and minutes</li>
    <li>Allow you to add and remove your favorite providers</li>
    <li>Set goals for yourself and track their due dates</li>
    <li>Link an image of yourself and state your motto</li>
    <li>Search any provider's entire profile for key words</li>
  </ul>
</div>
</p>
<a href="https://nextstepsapp.herokuapp.com"><img class="projectPic" src={nextstepscreenshot}/></a>
</div>
      </div>
    )
  }
}