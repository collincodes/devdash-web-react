import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './app.min.css';
import { gitData } from './Data'
import UserCard from './components/UserCard'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    gitData.call(this)
  }

  render() {
    const { user } = this.state

    return (
      <div>
        <Route exact path="/" render={() => (
          <main id="home">
            <div className="body-container">
              <UserCard
                data={ user }
                />
            </div>
          </main>
        )}/>
        <Route path="/repos" render={() => (
          <main id="repos">
            <div className="body-container">

            </div>
          </main>
        )}/>
      </div>
    );
  }
}

export default App;
