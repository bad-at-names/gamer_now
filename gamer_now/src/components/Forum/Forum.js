import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PostCard from './PostCard/PostCard';
import firebase from 'firebase';
import searchIcon from '../../main_assets/game_logos/search_icon.png';
import './Forum.css';

class Forum extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			search: ''
		};
	}

	handleSearch = e => {
		this.setState({
			search: new RegExp('.*' + e.target.value + '.*', 'i')
		});
		console.log(this.state);
	};

	componentDidMount() {
		var s = this.state.posts;
		var db = firebase.firestore();
		db.collection('posts')
			.orderBy('title', 'asc')
			.get()
			.then(querySnapshot => {
				querySnapshot.forEach(doc => {
					s.push(doc.data());
				});

				this.setState({
					posts: s
				});

				console.log(this.state.posts);
			})
			.catch(err => {
				console.log(err);
			});
	}
	render() {
		const { posts } = this.state;
		const postList = posts.length ? (
			posts.map(post => {
				if (
					post.name.match(this.state.search) ||
					post.title.match(this.state.search) ||
					post.question.match(this.state.search)
				) {
					return <PostCard post={post} key={post.title} />;
				}
			})
		) : (
			<h2>No Results Found</h2>
		);

		return (
			<div className="forum-super-container">
				<div className="forum-top-bar">
					<h2>Forums</h2>
					<div>
						<div className="search-bar-container">
							<img src={searchIcon} className="search-icon" alt="" />
							<input
								type="text"
								name="search"
								id="search"
								className="search-bar"
								placeholder="Search"
								onChange={this.handleSearch}
							/>
						</div>
						<span className="new-post-button">
							<Link to="./newpostform">New Post Form</Link>
						</span>
					</div>
				</div>

				{postList}
			</div>
		);
	}
}

const mapStateToProps = state => {
	//console.log(state);
	return {
		auth: state.firebase.auth
	};
};

//export default connect(mapStateToProps)(Forum);
export default Forum;
