import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { IconButton } from '@material-ui/core'
import { MoreVert } from '@material-ui/icons'

export default class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar" className="sidebar">
        <IconButton>{ MoreVert }</IconButton>
        <Link to="/">home</Link>
        <Link to="/repos">repositories</Link>
      </div>
    );
  }
}
