import { Formik, Field, Form } from 'formik';
import { Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const VoteForm = ({ id }) => {

    //Get data from the store
    const optionOneText = useSelector(state => state.questions[id].optionOne.text)
    const optionTwoText = useSelector(state => state.questions[id].optionTwo.text)

    let history = useHistory()

    const redirectToHome = () => {
        history.push("/")
    }

    return (
        <Container>
            <Formik
                initialValues={{ option: '' }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    console.log('Form submitted with ', values.option)
                    setSubmitting(false);
                    resetForm();
                    redirectToHome();
                }}>
                {formik => (
                    <Form>
                        <label>
                            <Field name="option" value="optionOne" type="radio" />
                            {optionOneText}
                        </label>

                        <label>
                            <Field name="option" value="optionTwo" type="radio" />
                            {optionTwoText}
                        </label>

                        <div className='btn-container'>
                            {!formik.values.option
                                ? <Button type="submit" disabled>Vote</Button>
                                : <Button type="submit">Vote</Button>}
                        </div>
                    </Form>
                )}
            </Formik>
        </Container >
    )
};

export default VoteForm;