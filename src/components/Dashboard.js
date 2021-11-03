import { useSelector } from "react-redux";

const Dashboard = ({ title, ids }) => {

    //Get data from the store
    const questions = useSelector(state =>

        ids.map(id => ({
            id: state.questions[id].id,
            author: state.questions[id].author,
            optionOne: state.questions[id].optionOne.text,
            optionTwo: state.questions[id].optionTwo.text
        }))
    )

    return (
        <div>
            <h1>{title}</h1>
            <ul>
                {questions.map(question =>
                    <li key={question.id}>Would you rather {question.optionOne} or {question.optionTwo}?</li>)}
            </ul>
        </div>
    )
};

export default Dashboard;