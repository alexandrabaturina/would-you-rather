import { useSelector } from "react-redux"
import { Button } from 'react-bootstrap'
import { useHistory } from "react-router"

const Dashboard = ({ title, ids }) => {

    //Get data from the store
    const questions = useSelector(state =>

        ids.map(id => ({
            id: state.questions[id].id,
            author: state.questions[id].author,
            optionOne: state.questions[id].optionOne.text,
            optionTwo: state.questions[id].optionTwo.text,
            timestamp: state.questions[id].timestamp
        }))
    )

    let history = useHistory()

    const handleClick = (question) => {
        history.push(`/questions/${question}`)
    }

    return (
        <div>
            <h1>{title}</h1>
            <div>
                {questions
                    .sort((a, b) => b.timestamp - a.timestamp)
                    .map(question => (
                        <div className='question-item' key={question.id}>

                            <div className='question-info'>
                                <p>
                                    Would you rather <span className='bold'>{question.optionOne} </span>
                                    or <span className='bold'>{question.optionTwo}</span>?
                                </p>
                                <span className='author-info'>Asked by {question.author}</span>
                            </div>

                            <Button
                                variant="outline-dark"
                                className='dashboard-button'
                                onClick={() => handleClick(question.id)}>
                                View
                            </Button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Dashboard