import React, { Component } from 'react'

class Repositories extends Component {

  render() {
    const { data } = this.props
    const user = { data }.data
    const repos = user.repositories.edges
    const listRepos = repos.map((rep, i) =>
      <li key={ i } className="repo">
        <a href={ rep.node.url }>
          <div className="meta">
            <span className="name">{ rep.node.name }</span>
            <span className="commits">{ rep.node.defaultBranchRef.target.history.totalCount } Commits</span>
          </div>
          <span className="description">{ rep.node.description.substr(0, 250) }</span>
        </a>
      </li>
    )

    return (
      <div id="repositories" className="card">
        <span className="heading">Repositories</span>
        <div className="repos">
          <ul className="list">
            { listRepos }
          </ul>
        </div>
      </div>
    )
  }
}

export default Repositories
