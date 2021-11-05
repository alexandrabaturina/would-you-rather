import { RECEIVE_USERS } from '../actions/users';
import { ADD_QUESTION, SAVE_ANSWER } from '../actions/questions';

const users = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            };
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions
                        .concat([action.question.id])
                }
            };
        case SAVE_ANSWER:
            const { authedUser, qid: id, answer } = action.info
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [id]: answer
                    }
                }
            }
        default:
            return state;
    }
};

export default users;