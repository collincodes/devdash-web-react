import React, { Component } from 'react';

class Overview extends Component {

  render() {
    const { data } = this.props
    const user = { data }.data
    const repos = user.repositories.edges
    const repoNum = repos.length
    // map over repos and add commit counts to total
    let commitNum = 0
    repos.map((repo) => {
      return commitNum += repo.node.defaultBranchRef.target.history.totalCount;
    })
    // track all languages
    let totalBytes = 0
    let js = 0, html = 0, css = 0, python = 0, others = 0
    let languages = [] // array to store languages
    for (let repo of repos) {
      if (repo.node.languages.edges.length > 0) {
        repo.node.languages.edges.forEach( obj => { // map through language edges
          if (languages.indexOf( obj.node.name ) === -1 && languages.length <= 4) {
            languages.push( obj.node.name ) // languages array filled
          }
          switch (obj.node.name) {
            case 'JavaScript':
              js += obj.size
              break;
            case 'HTML':
              html += obj.size
              break;
            case 'CSS':
              css += obj.size
              break;
            case 'Python':
              python += obj.size
              break;
            default:
              return false
          }
          totalBytes += obj.size // add to total 100%
        })
      }
    }
    // language split
    const jsPerc = ((js / totalBytes) * 100).toFixed(1)
    const htmlPerc = ((html / totalBytes) * 100).toFixed(1)
    const cssPerc = ((css / totalBytes) * 100).toFixed(1)
    const pythonPerc = ((python / totalBytes) * 100).toFixed(1)

    const listLanguages = languages.sort().map((lang, i) => {
      let percent
      switch ( lang ) {
        case 'JavaScript':
          percent = jsPerc
          break;
        case 'HTML':
          percent = htmlPerc
          break;
        case 'CSS':
          percent = cssPerc
          break;
        case 'Python':
          percent = pythonPerc
          break;
        default:
          percent = ''
      }
      return <li key={ i } className="language">
        <div className="stat-bar">
          <span className="percent">{ percent }%</span>
          <span className="color"></span>
        </div>
        <span className="label">{ lang }</span>
      </li>
    });

    return (
      <div id="overview" className="card">
        <header>
          <span className="heading">Overview</span>
        </header>
        <div className="overview">
          <div className="statistics">
            <div className="languages">
              <ul>
                { listLanguages }
              </ul>
            </div>
            <div className="repos statistic">
              <span className="number">{ repoNum }</span>
              <label>Repositories</label>
            </div>
            <div className="commits statistic">
              <span className="number">{ commitNum }</span>
              <label>Commits</label>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Overview;
