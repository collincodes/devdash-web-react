import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './app.min.css';
import { gitData } from './Data'
import UserCard from './components/UserCard'
import Repositories from './components/Repositories'

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
          <h1 className="title">GitHub Dashboard UI</h1>
          <Route exact path="/" render={() => (
              <main id="home">
                <div className="one">
                  <UserCard
                    data={ user }
                    />
                </div>
                <div className="two">
                  <Repositories
                    data={ user }
                    />
                </div>
              </main>
            )}/>
            <Route path="/repos" render={() => (
                <main id="repos">
                  <div className="container">

                  </div>
                </main>
              )}/>
            </div>
          );
    } else {
      return (
        <span>Loading...</span>
      )
    }
  }
}

export default App;
