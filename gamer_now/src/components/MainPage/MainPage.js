import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';
import FantasyImg from './../../main_assets/fantasyimg.svg';
import ForumImg from './../../main_assets/forumimg.png';
import CoachImg from './../../main_assets/coachimg.svg';

const MainPage = () => {
    return (
        <div className = "mp-container">
            <h1>STATE YOUR BUSINESS</h1>
            <div className = 'title-tags'><Link to = './fantasy'><img src = { FantasyImg } alt = ""/></Link></div>
            <div className = 'title-tags'><Link to = './forum'><img src = { ForumImg } alt = ""/></Link></div>
            <div className = 'title-tags'><Link to = './coach'><img src = { CoachImg } alt = ""/></Link></div>
        </div>
    )
}

export default MainPage;