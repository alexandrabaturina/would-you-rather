import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import handleInitialData from '../actions/shared';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';
import Login from './Login';
import Home from './Home';
import NavBar from './NavBar';
import Question from './Question';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';

const App = () => {

  const authedUser = useSelector(state => state.authedUser)

  const dispatch = useDispatch()

  // Get initial data
  useEffect(() => {
    dispatch(handleInitialData())
  }, []);

  return (
    <Router>
      {authedUser === null
        ? <Login />
        : <>
          <NavBar />
          <LoadingBar />
          <>
            <Route path='/' exact component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/questions/:question_id' component={Question} />
            <Route path='/add' component={NewQuestion} />
            <Route path='/leaderboard' component={Leaderboard} />
          </>
        </>}


    </Router>
  )
};

export default App;