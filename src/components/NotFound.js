import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const NotFound = () => {

    let history = useHistory();

    const handleClick = () => {
        history.goBack();
    }

    return (
        <>
            <h1>
                <div className='not-found'>
                    4<FontAwesomeIcon icon={faFrown} />4
                </div>
                <div>Oops! This page does not exist.</div>
            </h1>
            <div className='back-button'>
                <Button
                    size="lg"
                    onClick={() => handleClick()}>
                    {`< Back`}
                </Button>
            </div>
        </>
    )
};

export default NotFound;