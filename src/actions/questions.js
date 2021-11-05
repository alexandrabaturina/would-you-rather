import { saveQuestion, saveQuestionAnswer } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const SAVE_ANSWER = 'SAVE_ANSWER';

export const receiveQuestions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
};

const addQuestion = (question) => {
    return {
        type: ADD_QUESTION,
        question
    }
};

export const handleAddQuestion = (question) =>
    (dispatch) => {
        dispatch(showLoading);
        return saveQuestion(question)
            .then(question => dispatch(addQuestion(question)))
            .then(() => dispatch(hideLoading()))
    };

const saveAnswer = ({ authedUser, qid, answer }) => {
    return {
        type: SAVE_ANSWER,
        info: {
            authedUser,
            qid,
            answer
        }
    }
};

export const handleSaveAnswer = ({ qid, answer }) =>
    (dispatch, getState) => {
        const { authedUser } = getState();
        saveQuestionAnswer({ authedUser, qid, answer })
            .then(() => {
                dispatch(saveAnswer({ authedUser, qid, answer }))
            })
            .catch((e) => {
                console.warn('Error in handleSaveAnswer: ', e);
                saveQuestionAnswer({ authedUser, qid, answer });
                alert('There was an error saving your answer. Try again.');
            })
    };