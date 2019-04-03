import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';
import FantasyImg from '../../main_assets/fantasyimg.png';
import ForumImg from '../../main_assets/forumimg.svg';
import CoachImg from '../../main_assets/coachimg.svg';
import MainUnit from './MainUnit';

class MainPage extends Component {
    services = {
        fantasy: ["left", FantasyImg, "Fantasy", "Become the best in the world by challenging your friends and others based on your knowledge of the game."],
        forum: ["right", ForumImg, "Forums", "Discuss new strategies, metas, opininons and other contents with users to open up to the community"],
        coach: ["left", CoachImg, "Coach", "Get a coach to help you with your gameplay. These coaches are handi-picked from the best of the best and are here to help improve your gameplay."]
    }
    render() {
        return (
            <div className = "mp-container">
                <div className = 'title-tags'>
                    <Link to = './fantasy'>
                        <MainUnit info = { this.services.fantasy } />
                    </Link>
                </div>
                <div className = 'title-tags'>
                    <Link to = './forum'>
                        <MainUnit info = { this.services.forum } />
                    </Link>
                </div>
                <div className = 'title-tags'>
                    <Link to = './coach'>
                        <MainUnit info = { this.services.coach } />
                    </Link>
                </div>
            </div>
        )
    }
}

export default MainPage;