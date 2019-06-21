import React, { Component } from 'react';
import { connect } from 'react-redux';
import riderslogo from '../assets/img/riders-logo-png.png';
import Dashboard from "./userDashboard";
import { getResults } from '../store/actions/results';

class GameResult extends Component {
	componentDidMount() {
		setTimeout(() => {
			const roomId = this.props.match.params.roomId;
			this.props.getResults(roomId);
		}, 5000);
	}
	badges(marks) {
		if (marks <= 10 && marks >= 8) {
			return <span className="pull-right badge-green">EXCELLENT</span>;
		}
		if (marks <= 7 && marks >= 5) {
			return <span className="pull-right badge-yellow">GOOD</span>;
		}
		return <span className="pull-right badge-red">BAD</span>;
	}
	render() {
		const results = this.props.result.result.marks;
		if (results) {
			return (
				<React.Fragment>
					<img src={riderslogo} alt="Logo" className="header-logo" />
					<div className="grid">
					<div className="container create-game-room overflow">
						<h1>Game Result</h1>
						{results.map((result) => (
							<div key={result.id} className="card">
								<span className="pull-left">{results.indexOf(result) + 1}</span>
								<span className="user-info">
									<img src={result.User.image} alt="profile" />
									<figcaption>{result.User.username}</figcaption>
								</span>
								<span className="pull-right">POINT: {result.marks}/10</span>
								<br />
								<br />
								{this.badges(result.marks)}
							</div>
						))}
					</div>
					<Dashboard userInfo={this.props.auth} />
					</div>
				</React.Fragment>
			);
		}
		return (
			<React.Fragment>
				<img src={riderslogo} alt="Logo" className="header-logo" />
				<div className="grid">
				<div className="container create-game-room">
					<h1>Loading...</h1>
				</div>
				<Dashboard userInfo={this.props.auth} />
				</div>
			</React.Fragment>
		);
	}
}
const mapStateToProps = (state) => ({
	result: state.result,
	auth:state.auth
});
export default connect(mapStateToProps, { getResults })(GameResult);
