import { ADD_QUESTION, RECEIVE_QUESTIONS, SAVE_ANSWER } from "../actions/questions";

const questions = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            };
        case ADD_QUESTION:
            const question = action.question
            return {
                ...state,
                [question.id]: question
            }
        case SAVE_ANSWER:
            const { authedUser, qid: id, answer } = action.info;
            return {
                ...state,
                [id]: {
                    ...state[id],
                    [answer]: {
                        ...state[id].answer,
                        votes: state[id][answer].votes.concat([authedUser])
                    }
                }
            }
        default:
            return state;
    }
};

export default questions;