import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Form, Button } from "react-bootstrap"
import setAuthedUser from "../actions/authedUser";

const Login = () => {

    // Get data from the store
    const users = useSelector(state =>
        Object.values(state.users)
            .map(item => ({ name: item.name, id: item.id }))
    );

    const dispatch = useDispatch();

    const [selectedUser, setSelectedUser] = useState(null);

    const handleSelect = e => {
        setSelectedUser(e.target.options[e.target.selectedIndex].dataset.id)
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(setAuthedUser(selectedUser));

    };

    return (
        <Container>
            <h1>Login</h1>
            <Form>
                <Form.Select defaultValue={'DEFAULT'} onChange={handleSelect}>
                    <option value={'DEFAULT'} disabled>Select a user</option>
                    {users.map(user =>
                        <option key={user.id} data-id={user.id}>{user.name}</option>)}
                </Form.Select>

                <div className='btn-container'>
                    <Button variant='outline-dark' onClick={handleSubmit}>
                        Login
                    </Button>
                </div>
            </Form>
        </Container>
    )
};

export default Login;