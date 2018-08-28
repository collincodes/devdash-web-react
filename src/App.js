import React, { Component } from 'react';
import { Route } from 'react-router-dom'

// styles
import './app.min.css';

// data import
import { gitData } from './Data'

// components defined
import UserCard from './components/UserCard'
import Repositories from './components/Repositories'
import Links from './components/Links'
import Overview from './components/Overview'
import Loading from './components/Loading'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      hasFinished: false
    }
  }

  componentDidMount() {
    gitData.call(this).then(res => {
      this.setState({
        user: res.data.user,
        hasFinished: true
       })
    })
  }


  render() {
    const { user } = this.state

    if (this.state.hasFinished) {
      return (
        <div>
          <h1 className="title">Development Dashboard UI</h1>
          <Route exact path={`/`} render={() => (
            <main id="home">
              <div className="one">
                <UserCard
                  data={ user }
                  />
                <Links />
              </div>
              <div className="two">
                <Overview
                  data={ user }
                />
              </div>
              <div className="three">
                <Repositories
                  data={ user }
                  />
              </div>
            </main>
          )}/>
        </div>
      );
    } else {
      return (
        <Loading />
      )
    }
  }
}

export default App;
