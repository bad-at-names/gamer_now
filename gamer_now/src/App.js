import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/Navbar/Navbar';
import FooterBar from './components/layout/FooterBar/FooterBar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Fantasy from './components/Fantasy/Fantasy';
import PlayerInfo from './components/Fantasy/PlayerInfo';
import Coach from './components/Coach/Coach';
import Forum from './components/Forum/Forum';
import MainPage from './components/MainPage/MainPage';
import './App.css';
import CoachForm from './components/Coach/CoachForm/CoachForm';
import NewPostForm from './components/Forum/NewPost/NewPostForm';

import Leaderboard from './components/Fantasy/Leaderboard/Leaderboard';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<NavBar />
					<Switch>
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<Route path="/fantasy" component={Fantasy} />
						<Route path="/forum" component={Forum} />
						<Route path="/coach" component={Coach} />
						<Route path="/playerinfo" component={PlayerInfo} />
						<Route path="/coachapplication" component={CoachForm} />
						<Route path="/newpostform" component={NewPostForm} />
						<Route path="/leaderboard" component={Leaderboard} />
						<Route path="/" component={MainPage} />
					</Switch>
					<FooterBar />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
