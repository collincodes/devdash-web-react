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
    let jsColor = '', htmlColor = '', cssColor = '', pythonColor = '', otherColor = ''
    let languages = [] // array to store languages
    for (let repo of repos) {
      if (repo.node.languages.edges.length > 0) { // eslint-disable-next-line
        repo.node.languages.edges.forEach( obj => { // map through language edges
          if (languages.indexOf( obj.node.name ) === -1 && languages.length <= 4) {
            languages.push( obj.node.name ) // languages array filled
          }
          switch (obj.node.name) {
            case 'JavaScript':
              jsColor = '#001e4b'
              js += obj.size
              break;
            case 'HTML':
              htmlColor = '#002881'
              html += obj.size
              break;
            case 'CSS':
              cssColor = '#004db4'
              css += obj.size
              break;
            case 'Python':
              pythonColor = '#76a0d1'
              python += obj.size
              break;
            default:
              otherColor = '#bebebe'
              others += obj.size
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

    languages = [
      {
        language: 'JavaScript',
        size: jsPerc,
        color: jsColor
      }, {
        language: 'HTML',
        size: htmlPerc,
        color: htmlColor
      }, {
        language: 'CSS',
        size: cssPerc,
        color: cssColor
      }, {
        language: 'Python',
        size: pythonPerc,
        color: pythonColor
      }
    ]

    console.log(others, otherColor)

    const listLanguages = languages.map((lang, i) => {
      return <li key={ i } className="language">
        <div className="stat-bar">
          <span className="color" style={{ backgroundColor: lang.color }}></span>
        </div>
        <span className="label">{ lang.language }</span>
      </li>
    });

    const listBars = languages.map((lang, i) => {
      return <span key={ i } className="bar" title={ lang.size + '%' } style={{ backgroundColor: lang.color, width: 'calc(' + lang.size + '% - 0.25rem' }}></span>
    })

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
          <div className="language-bar">
            { listBars }
          </div>
          <div className="more">
            <p className="js">JavaScript Frameworks: React & Ember</p>
            <p className="css">CSS Preprocessors: SASS/SCSS & Stylus</p>
          </div>
        </div>
      </div>
    );
  }

}

export default Overview;
