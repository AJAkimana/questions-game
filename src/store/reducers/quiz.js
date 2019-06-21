import { SELECT_ANSWER, GO_NEXT, FINISH } from '../actions';
import { markQestion } from '../../helpers';

const initalState = {
	currentQuestion: 1,
	totalMarks: 0,
	currentAnswer: '',
	questionsDone: []
};

export const handleQuestion = (state = initalState, action) => {
	switch (action.type) {
		case SELECT_ANSWER:
			const { payload } = action;
			const { question, answer } = payload;
			const { questionsDone } = state;
			if (!questionsDone.map((qDone) => qDone.question).includes(question)) {
				const marks = state.totalMarks + markQestion(payload);
				return {
					...state,
					totalMarks: marks,
					currentAnswer: answer,
					questionsDone: [
						...state.questionsDone,
						{
							question,
							answer,
							marks: markQestion(payload)
						}
					]
				};
			}
			return state;
		case GO_NEXT:
			if (action.payload >= 7) return state;
			return {
				...state,
				isDone: false,
				currentQuestion: action.payload + 1
			};
		case FINISH:
			return state;
		default:
			return state;
	}
};
