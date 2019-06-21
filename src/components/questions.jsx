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
		const { handles, history, finishGame } = this.props;
		const roomId = this.props.match.params.roomId;
		const { totalMarks } = handles;
		socket.on('submit', () => {
			finishGame({ history, userMarks: { roomId, marks: totalMarks } });
		});
	}
	render() {
		const { handles, history } = this.props;
		const roomId = this.props.match.params.roomId;
		const allQuestions = getQns();
		const { length: count } = allQuestions;
		const { currentQuestion, totalMarks, currentAnswer } = handles;
		const questions = paginate(allQuestions, currentQuestion, 1);
		const submitButtonTitle = currentQuestion >= 7 ? 'Finish game' : 'Next question';
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
	const { handles, auth } = state;
	return {
		handles,
		auth
	};
};

const connectedQuestionsPage = connect(mapStateToProps, { selectAnswer, goToNextQuestion, finishGame })(Questions);
export { connectedQuestionsPage as Questions };
