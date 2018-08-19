import React, { Component } from 'react'

class UserCard extends Component {

  render() {
    const { data } = this.props
    const user = { data }.data
    const name = user.name
    const email = user.email
    const avatarUrl = user.avatarUrl

    return (
      <div className="card">
        <div className="top">
          <img src={ avatarUrl } alt="My Github Avatar" />
          <h1 className="name">{ name }</h1>
          <h6 className="email">{ email }</h6>
        </div>
      </div>
    );
  }
}

export default UserCard
