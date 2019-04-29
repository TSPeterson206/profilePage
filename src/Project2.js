import React, { Component } from 'react'
import squeakerscreenshot from './images/squeakerscreenshot.png'

export default class Project2 extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }

  render () {
    return (
      <div>
        <div class='container'>

          <a href='https://squeakerpets.herokuapp.com'>
            <h2 class='projectTitle'>Squeaker</h2>
          </a>
          <div class='repos'>
            <a href='https://github.com/squeaker-g105-q3/squeaker-frontend'>
              <p class='repos'>GitHub repo: Front</p>
            </a>
            <a href='https://github.com/squeaker-g105-q3/squeaker-backend'>
              <p>GitHub repo: Back</p>
            </a>
          </div>
          <p className='projectDescription'>
  &emsp;Squeaker Pets is a fully-responsive social media application for your pets. It is hosted on Heroku and is a full
  CRUD application. Feel free to peruse other profiles and react to their posts.<br /><br />
            <a href='https://squeakerpets.herokuapp.com'><img alt={'largeProjectPic'} class='largeProjectPic' src={squeakerscreenshot} /></a><br /><br />

            <div class='features'>
              <strong>Features</strong><br />
              <ul className='projectFeaturesList'>
                <li>Account creation and login with a unique username.</li>
                <li>Profile customization including profile photo uploads hosted by Cloudinary.</li>
                <li>Create posts using a rich text editor allowing different media types such as images and videos along with
      text formatting.</li>
                <li>React to posts from within the Squeaker community using a set of emojis that express your pet's feelings
      and thoughts based on our opinion.</li>
              </ul>
            </div>
          </p>
        </div>
      </div>
    )
  }
}
