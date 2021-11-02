import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import setAuthedUser from "../actions/authedUser";

const Login = () => {

    // Get data from the store
    const users = useSelector(state =>
        Object.values(state.users)
            .map(item => ({ name: item.name, id: item.id }))
    )

    const dispatch = useDispatch()

    const [selectedUser, setSelectedUser] = useState(null)

    const handleSelect = e => {
        setSelectedUser(e.target.options[e.target.selectedIndex].dataset.id)
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setAuthedUser(selectedUser))
    }

    return (
        <div>
            <h1>Login</h1>
            <form>
                <select onChange={handleSelect}>
                    <option selected disabled>Select a user</option>
                    {users.map(user =>
                        <option key={user.id} data-id={user.id}>{user.name}</option>)}
                </select>

                <button onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
};

export default Login;