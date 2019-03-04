import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar/NavBar';
import FooterBar from './components/layout/FooterBar/FooterBar';
//import SignedIn from './components/layout/FooterBar/SignedIn';
//import SignedOut from './components/layout/FooterBar/SignedOut';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Fantasy from './components/Fantasy/Fantasy';
import Coach from './components/Coach/Coach';
import Forum from './components/Forum/Forum';
import MainPage from './components/MainPage/MainPage';
import './App.css';

//hi im eddie

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path = '/login' component = { Login } />
            <Route path = '/register' component = { Register } />
            <Route path = '/fantasy' component = { Fantasy } />
            <Route path = '/forum' component = { Forum } />
            <Route path = '/coach' component = { Coach } />
            <Route path = '' component = { MainPage } />
          </Switch>
          <FooterBar />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
