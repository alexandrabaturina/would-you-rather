import { Container, Button } from "react-bootstrap";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const NewQuestion = () => {

    const validationSchema = Yup.object({
        optionOne: Yup.string()
            .min(8, 'The answer should be at least 8 characters long.')
            .required('*Option one is required'),
        optionTwo: Yup.string()
            .min(8, 'The answer should be at least 8 characters long.')
            .required('*Option two is required')
    });

    const addQuestion = (values) => {
        console.log('Option one: ', values.optionOne)
        console.log('Option two: ', values.optionTwo)
    };

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
                    addQuestion(values)
                    setSubmitting(false)
                    resetForm()
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

                        {!formik.values.optionOne || !formik.values.optionTwo ?
                            <Button type="submit" disabled>Add Question</Button> :
                            <Button type="submit">Add Question</Button>}
                    </Form>
                )}
            </Formik>
        </Container>
    )
};

export default NewQuestion;