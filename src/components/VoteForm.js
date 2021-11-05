import { Formik, Field, Form } from 'formik';
import { Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const VoteForm = ({ id }) => {

    //Get data from the store
    const optionOneText = useSelector(state => state.questions[id].optionOne.text)
    const optionTwoText = useSelector(state => state.questions[id].optionTwo.text)

    let history = useHistory()

    const handleSubmit = (values) => {
        console.log('Form submitted ', values)
    }

    const redirectToHome = () => {
        history.push("/")
    }

    return (
        <Container>
            <Formik
                initialValues={{ option: '' }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    handleSubmit(values);
                    setSubmitting(false);
                    resetForm();
                    redirectToHome();
                }}>
                {formik => (
                    <Form>
                        <div role="group" className='voting-options'>
                            <label>
                                <Field type="radio" name="option" value="optionOne" />
                                {optionOneText}
                            </label>
                            <label>
                                <Field type="radio" name="option" value="optionTwo" />
                                {optionTwoText}
                            </label>
                            <div className='btn-container'>
                                <Button type="submit">Vote</Button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </Container>

    )
}

export default VoteForm;