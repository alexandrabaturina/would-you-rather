import { Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const Leaderboard = () => {

    // Get data from the store
    const users = useSelector(state =>

        Object.values(state.users)
            .map(user => ({
                name: user.name,
                avatar: user.avatarURL,
                questions: user.questions.length,
                answers: Object.keys(user.answers).length,
            }))
            .sort((a, b) => {
                let userA = a.questions + a.answers
                let userB = b.questions + b.answers
                return userB - userA
            })
    )

    return (
        <Container>
            <h1>Leaderboard</h1>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User Name</th>
                        <th>Avatar</th>
                        <th>Questions</th>
                        <th>Answers</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, id) => (
                        <tr>
                            <th>{id + 1}</th>
                            <th>{user.name}</th>
                            <th>
                                <img src={user.avatar} className='avatar' alt={`Avatar of ${user.name}`} />
                            </th>
                            <th>{user.questions}</th>
                            <th>{user.answers}</th>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>)
}

export default Leaderboard;