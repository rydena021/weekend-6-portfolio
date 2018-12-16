import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Admin from '../Admin/Admin';
import Projects from '../Projects/Projects';


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route path='/' exact component={Projects} />
          <Route path='/admin' component={Admin} />
        </div>
      </Router>
    );
  }
}

export default App;
