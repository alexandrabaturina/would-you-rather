import { useSelector } from 'react-redux'
import { ProgressBar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const VoteDetails = ({ id }) => {

    const data = useSelector(state => {
        const votesOne = state.questions[id].optionOne.votes
        const votesTwo = state.questions[id].optionTwo.votes

        return {
            optionOne: {
                text: state.questions[id].optionOne.text,
                total: votesOne.length,
                percentage: (votesOne.length / (votesOne.length + votesTwo.length) * 100)
                    .toFixed(2)
            },
            optionTwo: {
                text: state.questions[id].optionTwo.text,
                total: votesTwo.length,
                percentage: (votesTwo.length / (votesOne.length + votesTwo.length) * 100)
                    .toFixed(2)
            },
            userVote: state.users[state.authedUser].answers[id] || null
        }
    })

    const { optionOne, optionTwo, userVote } = data

    return (
        <>
            <div className='vote-details'>
                <div className={userVote === 'optionOne' ? 'user-option' : 'vote-option'}>
                    {userVote === 'optionOne' && (
                        <div className='user-answer'>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            <span>Your answer</span>
                        </div>
                    )}
                    <p>{optionOne.text}</p>
                    <span>Votes: {optionOne.total}</span>
                    <ProgressBar
                        className="progress"
                        now={optionOne.percentage}
                        variant="info"
                        label={`${optionOne.percentage}%`} />
                </div>
                <div className={userVote === 'optionTwo' ? 'user-option' : 'vote-option'}>
                    {userVote === 'optionTwo' && (
                        <div className='user-answer'>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            <span>Your answer</span>
                        </div>
                    )}
                    <p>{optionTwo.text}</p>
                    <span>Votes: {optionTwo.total}</span>
                    <ProgressBar
                        className="progress"
                        now={optionTwo.percentage}
                        variant="warning"
                        label={`${optionTwo.percentage}%`} />
                </div>
            </div>
        </>
    )
}

export default VoteDetails