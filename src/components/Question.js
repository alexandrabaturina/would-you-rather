import { useParams, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import VoteDetails from './VoteDetails';
import VoteForm from './VoteForm';

const Question = () => {

    const { question_id: id } = useParams();

    //Get data from the store
    const ids = useSelector(state => Object.keys(state.questions));
    const avatar = useSelector(state => state.users[state.authedUser].avatarURL);
    const author = useSelector(state => state.questions[id].author);
    const isAnswered = useSelector(state =>
        (state.questions[id].optionOne.votes.indexOf(state.authedUser) !== -1) ||
        (state.questions[id].optionTwo.votes.indexOf(state.authedUser) !== -1)
    )

    const isValid = ids.indexOf(id) === -1
        ? false
        : true;

    if (!isValid) {
        return <Redirect to='/404' />
    };

    return (
        <div className='card-container'>
            <div className='question-card'>
                <div className='question-card-header'>
                    <img src={avatar} alt="Avatar" className='avatar' />
                    <div>{author} asks</div>
                </div>
                <h1>Would you rather...</h1>
                {isAnswered
                    ? <VoteDetails id={id} />
                    : <VoteForm id={id} />
                }
            </div>
        </div>
    )
};

export default Question;