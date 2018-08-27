import React, { Component } from 'react';

class Overview extends Component {

  render() {
    const { data } = this.props
    const user = { data }.data
    const repos = user.repositories.edges
    const repoNum = repos.length
    let commitNum = 0
    repos.map((repo) => {
      return commitNum += repo.node.defaultBranchRef.target.history.totalCount
    })
    console.log(commitNum)
    return (
      <div id="overview" className="card">
        <header>
          <span className="heading">Overview</span>
        </header>
        <div className="overview">
          <div className="statistics">
            <div className="repos">
              <span className="number">{ repoNum }</span>
              <h6>Repositories</h6>
            </div>
            <div className="commits">
              <span className="number">{ commitNum }</span>
              <h6>Commits</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Overview;
