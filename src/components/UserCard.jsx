import React, { Component } from 'react'

class UserCard extends Component {

  render() {
    const { data } = this.props
    const user = { data }.data
    const avatarUrl = user.avatarUrl
    const name = user.name
    const email = user.email
    const location = user.location
    const bio = user.bio

    return (
      <div id="userCard" className="card">
        <div className="top">
          <span className="name">{ name }</span>
          <img src={ avatarUrl } alt="My Github Avatar" />
        </div>
        <div className="bottom">
          <span className="bio">{ bio }</span>
          <span className="location">{ location }</span>
          <a href={ "mailto:" + email } className="email">{ email }</a>
        </div>
      </div>
    );
  }
}

export default UserCard
