import React, { Component } from 'react'
import { socialMedia } from '../Data'

class Links extends Component {
  render() {
    const links = socialMedia.map( (link, i) =>
      <li key={ i } className="link">
        <a href={ link.url } target="_blank">
          <i className={ link.icon }></i>
        </a>
      </li>
    );

    return(
      <div id="links" className="card">
        <header>
          <span className="heading">Development Links</span>
        </header>
        <div className="links">
          <ol className="list">
            { links }
          </ol>
        </div>
      </div>
    );
  }
}

export default Links
