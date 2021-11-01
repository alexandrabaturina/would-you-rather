import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import handleInitialData from '../actions/shared';

const App = () => {

  const dispatch = useDispatch()

  // Get initial data
  useEffect(() => {
    dispatch(handleInitialData())
  }, []);

  return (
    <div>
      Would You Rather
    </div>
  )
};

export default App;