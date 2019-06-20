import Http from '../../helpers/httpServices';
import { SELECT_ANSWER, GO_NEXT, FINISH } from './';
import socket from '../../helpers/socket';

export const selectAnswer = (question) => {
	return {
		type: SELECT_ANSWER,
		payload: question
	};
};

export const goToNextQuestion = ({ currentQuestion, totalQuestions, userMark, history }) => {
	if (currentQuestion >= totalQuestions) {
		Http.post('api/v1/game/marks', userMark)
			.then((res) => {
				console.log('Result', res.data);
				socket.emit('auto_submit', () => {
					console.log('===>Data from auto submit');
					history.push('/gameResult');
				});
			})
			.catch((er) => {
				socket.emit('auto_submit', () => {
					console.log('===>Data from auto submit');
					history.push('/gameResult');
				});
				console.log('Errot', er);
			});
		return {
			type: FINISH
		};
	}
	return {
		type: GO_NEXT,
		payload: currentQuestion
	};
};

export const finishGame = ({ history, marks }) => {
	Http.post('/game/marks', marks)
		.then((res) => {
			console.log('Result', res.data);
			history.push('/gameResult');
		})
		.catch((er) => {
			console.log('Errot', er);
		});
	return {
		type: FINISH
	};
};
