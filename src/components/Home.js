import { useDispatch, useSelector } from "react-redux";

const Home = () => {

    const questionsIds = useSelector(state => Object.keys(state.questions))
    // const authedUser = useSelector(state => state.authedUser)
    // const users = useSelector(state => state.users[authedUser].answers)

    console.log(questionsIds)


    return (
        <div>
            <h1>Home</h1>
            <div>
                <h2>All Question IDs</h2>
                {questionsIds.map(id => (
                    <p>ID: {id}</p>
                ))}
            </div>
        </div>
    )
};

export default Home;