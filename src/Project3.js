import React, { Component } from 'react';
import fivedollarscreenshot from './images/fivedollarbookstorescreenshot.png'


export default class Project3 extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }

  }
  
  render(){
    return (
      <div class="container">

    <a href="https://fivedollarbookstore.herokuapp.com">
      <h2 class="projectTitle">$5 Bookstore</h2>
    </a>
    <div class="repos">
      <a href="https://github.com/TSPeterson206/react-bookstore">
        <p>GitHub Repo</p>
      </a>
    </div>
    <p className="projectDescription">&emsp;The $5 Bookstore is an early project of demonstrating a basic React CRUD app. Simply browse, add or delete books as your see fit. Enjoy!<br></br><br></br>
    <a href="https://fivedollarbookstore.herokuapp.com"><img class="largeProjectPic" src={fivedollarscreenshot}/></a><br></br><br></br>

      <div class="features">

      <strong>Features</strong><br></br>
      <ul className="projectFeaturesList">
        <li>Search the book database via search bar</li>
        <li>Add any book you would like</li>
        <li>Edit any current book</li>
        <li>Add/Remove books from your cart</li>
        <li>Delete any book from the database</li>
      </ul>
    </div>
    </p>

  </div>
    )
  }
}