import React, { Component } from 'react';
import buybonsaiscreenshot from './images/bonsaitree.jpg'


export default class Project4 extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }

  }
  
  render(){
    return (
<div class="container">

<a href="http://buy-bonsai.surge.sh">
  <h2 class="projectTitle">BuyBonsai</h2>
</a>
<div class="repos">
  <a href="https://github.com/TSPeterson206/bonsai-ecommerce-site">
    <p>GitHub Repo</p>
  </a>
</div>
<p>BuyBonsai is an ecommerce site geared towards ease-of-use and finding that perfect tree! Peruse, add, remove,
  learn etc. This project is hosted on Surge.<br></br>

  <div class="features">

  <strong>Features</strong><br></br>
  <ul>
  <li>Search for a bonsai via category or price</li>
  <li>Populate and manipulate your category. See your total change in real-time.</li>
  <li>See your most recently viewed items</li>
</ul>
</div>
</p>
<a href="http://buy-bonsai.surge.sh"><img class="projectPic" src={buybonsaiscreenshot}/></a>

</div>
    )
  }
}