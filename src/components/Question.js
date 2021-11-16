import { useParams, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import VoteDetails from './VoteDetails'
import VoteForm from './VoteForm'

const Question = () => {

    const { question_id: id } = useParams()

    //Get data from the store
    const ids = useSelector(state => Object.keys(state.questions))

    const isValid = ids.indexOf(id) === -1
        ? false
        : true

    const avatar = useSelector(state => isValid
        ? state.users[state.authedUser].avatarURL
        : null)
    const author = useSelector(state => isValid ?
        state.questions[id].author
        : null)
    const isAnswered = useSelector(state => isValid
        ? (state.questions[id].optionOne.votes.indexOf(state.authedUser) !== -1) ||
        (state.questions[id].optionTwo.votes.indexOf(state.authedUser) !== -1)
        : null
    )

    if (!isValid) {
        return <Redirect to='/404' />
    }

    return (
        <div className='card-container'>
            <div className='question-card'>
                <div className='question-card-header'>
                    <img src={avatar} alt="Avatar" className='avatar' />
                    <div className='author-info'>{author} asks</div>
                </div>
                <h1>Would you rather...</h1>
                {isAnswered
                    ? <VoteDetails id={id} />
                    : <VoteForm id={id} />
                }
            </div>
        </div>
    )
}

export default Question