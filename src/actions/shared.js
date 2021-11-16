import { getInitialData } from '../utils/api'
import receiveUsers from './users'
import { receiveQuestions } from './questions'
import setAuthedUser from './authedUser'
import { hideLoading, showLoading } from "react-redux-loading"

const handleInitialData = () => (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
        .then(({ users, questions }) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(setAuthedUser(null))
            dispatch(hideLoading())
        })
}

export default handleInitialData