import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar" className="sidebar">
        <Link to="/">home</Link>
        <Link to="/repos">repositories</Link>
      </div>
    );
  }
}
