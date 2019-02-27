import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar/NavBar';
import FooterBar from './components/layout/FooterBar/FooterBar';
import SignedIn from './components/layout/FooterBar/SignedIn';
import SignedOut from './components/layout/FooterBar/SignedOut';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path='/login' component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
          <FooterBar />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
