import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import handleInitialData from '../actions/shared';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';
import Home from './Home';
import NavBar from './NavBar';
import Question from './Question';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';

const App = () => {

  const dispatch = useDispatch()

  // Get initial data
  useEffect(() => {
    dispatch(handleInitialData())
  }, []);

  const loading = useSelector(state => state.authedUser === null)
  const authedUser = useSelector(state => state.authedUser)

  return (
    <Router>
      <NavBar />
      <LoadingBar />
      {loading
        ? null
        : <>
          <Route path='/' exact component={Home} />
          <Route path='/questions/:question_id' component={Question} />
          <Route path='/add' component={NewQuestion} />
          <Route path='/leaderboard' component={Leaderboard} />
        </>
      }

    </Router>
  )
};

export default App;