export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

const receiveQuestions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
};

export default receiveQuestions;