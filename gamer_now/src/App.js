import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import FootBar from './components/layout/FooterBar/FooterBar';
import SignedIn from './components/layout/FooterBar/SignedIn';
import SignedOut from './components/layout/FooterBar/SignedOut';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
          </Switch>
          <FootBar />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
