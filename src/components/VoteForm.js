import { Formik, Field, Form } from 'formik';
import { Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const VoteForm = ({ id }) => {

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
                                One
                            </label>
                            <label>
                                <Field type="radio" name="option" value="optionTwo" />
                                Two
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