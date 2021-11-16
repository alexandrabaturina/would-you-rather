import { useState } from "react"
import { useSelector } from "react-redux"
import { Tabs, Tab, Container } from 'react-bootstrap'
import Dashboard from './Dashboard'

const Home = () => {

    // Get data from the store
    const answeredIds = useSelector(state =>
        Object.keys(state.users[state.authedUser].answers)
    )

    const unansweredIds = useSelector(state =>
        Object.keys(state.questions)
            .filter(id => answeredIds.indexOf(id) === -1)
    )

    const [key, setKey] = useState('unanswered')

    return (
        <Container>
            <Tabs
                activeKey={key}
                onSelect={k => setKey(k)}>

                <Tab eventKey="unanswered" title="Unanswered">
                    <Dashboard
                        title={"Unanswered Questions"}
                        ids={unansweredIds} />
                </Tab>

                <Tab eventKey="answered" title="Answered">
                    <Dashboard
                        title={"Answered Questions"}
                        ids={answeredIds} />
                </Tab>
            </Tabs>
        </Container>
    )
}

export default Home