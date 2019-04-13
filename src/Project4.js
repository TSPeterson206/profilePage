import React, { Component } from 'react';
import buybonsaiscreenshot from './images/buybonsaiscreenshot.png'


export default class Project4 extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }

  }
  
  render(){
    return (
<div class="container">

<a href="http://buyBonsai.surge.sh">
  <h2 class="projectTitle">BuyBonsai</h2>
</a>
<div class="repos">
  <a href="https://github.com/TSPeterson206/buyBonsai">
    <p>GitHub Repo</p>
  </a>
</div>
<p className="projectDescription">BuyBonsai is an ecommerce site geared towards ease-of-use and finding that perfect tree! Peruse, add, remove,
  learn etc. This project is hosted on Surge.<br></br><br></br>
  <a href="http://buyBonsai.surge.sh"><img class="largeProjectPic" src={buybonsaiscreenshot} alt='projectScreenshot'/></a><br></br><br></br>

  <div class="features">
  <strong>Features</strong>
  <ul className="projectFeaturesList">
  <li>Search for a bonsai via category or price</li>
  <li>Populate and manipulate your cart. See your total change in real-time.</li>
  <li>See your most recently viewed items</li>
  <li>Demonstration of form use and client-side validation</li>
</ul>
</div>
</p>

</div>
    )
  }
}