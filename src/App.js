import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.min.css';
import Sidebar from './components/Sidebar'
import './Data'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
          <main id="home">
            <div className="body-container">

            </div>
            <Sidebar />
          </main>
        )}/>
        <Route path="/repos" render={() => (
          <main id="repos">
            <div className="body-container">

            </div>
            <Sidebar />
          </main>
        )}/>
      </div>
    );
  }
}

export default App;
