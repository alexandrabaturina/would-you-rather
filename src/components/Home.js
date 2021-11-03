import { useState } from "react"
import { Tabs, Tab, Container } from 'react-bootstrap';
import Dashboard from './Dashboard';

const Home = () => {

    const [key, setKey] = useState('unanswered');

    return (
        <Container>
            <Tabs
                activeKey={key}
                onSelect={k => setKey(k)}>

                <Tab eventKey="unanswered" title="Unanswered">
                    <Dashboard title={"Unanswered Questions"} />
                </Tab>

                <Tab eventKey="answered" title="Answered">
                    <Dashboard title={"Answered Questions"} />
                </Tab>

            </Tabs>
        </Container>
    )
};

export default Home;