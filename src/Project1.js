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
    <p class="repos">GitHub repo: Front</p>
  </a>
  <a href="https://github.com/TSPeterson206/capstone-back">
    <p>GitHub repo: Back</p>
  </a>
</div>
<p className="projectDescription">
  &emsp;So you've decided to seek treatment enter early recovery...but now what?! You have now have a
  handle on your sobriety, but what about all the other areas of your life that were negatively impacted?

  NextSteps is a hub for those in recovery that are seeking to increase their support network and take a holistic
  approach towards getting stable and rounding out your healing. It is a yelp-like to access, rate and review treatment providers.<br></br><br></br>
  <a href="https://nextstepsapp.herokuapp.com"><img class="largeProjectPic" src={nextstepscreenshot}/></a><br></br><br></br>
  <div class="features">
  <strong>Features</strong><br></br>
  <ul className="projectFeaturesList">
  <li>Brose, rate and review providers in six key recovery life areas</li>
    <li>See your total sober time in days, hours and minutes</li>
    <li>Allow you to add and remove your favorite providers</li>
    <li>Set goals for yourself and track their due dates</li>
    <li>Link an image of yourself and state your motto</li>
    <li>Search any provider's entire profile for keywords</li>
  </ul>
</div>
</p>
</div>
      </div>
    )
  }
}