import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { Container, Button } from "react-bootstrap";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { handleAddQuestion } from "../actions/questions";

const NewQuestion = () => {

    let history = useHistory();

    const dispatch = useDispatch();
    const authedUser = useSelector(state => state.authedUser);

    const redirectToHome = () => {
        history.push("/");
    }

    const validationSchema = Yup.object({
        optionOne: Yup.string()
            .min(6, 'The answer should be at least 6 characters long.')
            .required('*Option one is required'),
        optionTwo: Yup.string()
            .min(6, 'The answer should be at least 6 characters long.')
            .required('*Option two is required')
    });

    return (
        <Container>
            <h1>Add New Question</h1>
            <h3>Would you rather...</h3>
            <Formik
                initialValues={{
                    optionOne: '',
                    optionTwo: ''
                }}
                validationSchema={validationSchema}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    dispatch(handleAddQuestion({
                        optionOneText: values.optionOne,
                        optionTwoText: values.optionTwo,
                        author: authedUser
                    }))
                    setSubmitting(false)
                    resetForm()
                    redirectToHome()
                }}>
                {formik => (
                    <Form>
                        <label className="field" htmlFor="optionOne">Option One</label>
                        <Field
                            id="optionOne"
                            name="optionOne"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.optionOne}
                            className={formik.errors.optionOne ? "error-highlight" : null} />
                        {formik.errors.optionOne ?
                            <div className="validation-error">{formik.errors.optionOne}</div> : null}

                        <label className="field" htmlFor="name">Option Two</label>
                        <Field
                            id="optionTwo"
                            name="optionTwo"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.optionTwo}
                            className={formik.errors.optionTwo ? "error-highlight" : null} />
                        {formik.errors.optionTwo ?
                            <div className="validation-error">{formik.errors.optionTwo}</div> : null}

                        <div className='btn-container'>
                            {!formik.values.optionOne || !formik.values.optionTwo
                                ? <Button type="submit" disabled>Add Question</Button>
                                : <Button type="submit">Add Question</Button>}
                        </div>
                    </Form>
                )}
            </Formik>
        </Container>
    )
};

export default NewQuestion;