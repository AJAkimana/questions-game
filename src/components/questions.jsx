import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/scss/quiz.scss';
import { paginate } from '../helpers/paginate';
import { selectAnswer, goToNextQuestion, finishGame } from '../store/actions';
import socket from '../helpers/socket';
import { getQns } from '../services/fakeData';

class Questions extends Component {
	constructor() {
		super();
		this.state = { isAnswerRight: false };
	}
	componentDidMount() {
		socket.emit('create', { name: 'room1' });
		const { handles, history, finishGame, invitation } = this.props;
		const roomId = invitation.gameRooms.room[0].game.id;
		const { totalMarks } = handles;
		console.log('Didimount');
		socket.on('submit', () => {
			finishGame({ history, userMark: { roomId, marks: totalMarks } });
		});
	}
	render() {
		const { handles, history, invitation } = this.props;
		const roomId = invitation.gameRooms.room[0].game.id;
		const allQuestions = getQns();
		const { length: count } = allQuestions;
		const { currentQuestion, questionsDone, totalMarks, currentAnswer } = handles;
		const questions = paginate(allQuestions, currentQuestion, 1);
		const submitButtonTitle = currentQuestion >= 7 ? 'Finish game' : 'Next question';
		console.log('QD:', questionsDone);
		return (
			<div className="container">
				{questions.map((question, index) => (
					<React.Fragment key={index}>
						<div className="question">
							<h4>
								Question {currentQuestion}/{count}
							</h4>
							<p>{question.title}</p>
						</div>
						<div className="answers">
							<ul>
								{question.answers.map((answer, ansIndex) => (
									<li
										className={setStyle(currentAnswer, answer)}
										key={ansIndex}
										onClick={() => this.props.selectAnswer({ question, answer })}
									>
										<span>{ansIndex + 1}</span> <p>{answer}</p>
									</li>
								))}
							</ul>
						</div>
					</React.Fragment>
				))}
				<div className="submit">
					<button
						className="fancy-btn"
						onClick={() =>
							this.props.goToNextQuestion({
								currentQuestion,
								totalQuestions: count,
								userMark: { roomId, marks: totalMarks },
								history
							})}
					>
						{submitButtonTitle}
					</button>
				</div>
			</div>
		);
	}
}
const setStyle = (currentAnswer, selectedAnswer) => {
	return currentAnswer === selectedAnswer ? 'right' : '';
};
const mapStateToProps = (state) => {
	const { handles, auth, invitation } = state;
	return {
		handles,
		auth,
		invitation
	};
};

const connectedQuestionsPage = connect(mapStateToProps, { selectAnswer, goToNextQuestion, finishGame })(Questions);
export { connectedQuestionsPage as Questions };
