import { getInitialData } from '../utils/api';
import receiveUsers from './users';
import receiveQuestions from './questions';
import setAuthedUser from './authedUser';

const handleInitialData = () => (dispatch) => {
    return getInitialData()
        .then(({ users, questions }) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
            dispatch(setAuthedUser(null));
        })
};

export default handleInitialData;