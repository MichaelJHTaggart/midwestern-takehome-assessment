import React from 'react';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  ErrorMessage,
} from 'formik';
import styles from '../styles/ContactForm.module.scss';
import * as yup from 'yup';
interface MyFormValues {
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  message: string;
}

const SignupSchema = yup.object({
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  title: yup.string().required('Required'),
  email: yup.string().required('Required'),
  message: yup.string().required('Required'),
});

interface MyFormValues extends yup.InferType<typeof SignupSchema> {}

export const ContactForm: React.FC = () => {
  const initialValues: MyFormValues = {
    firstName: '',
    lastName: '',
    title: '',
    email: '',
    message: '',
  };

  return (
    <div className={styles.ContactForm}>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.Form}>
            <h2 className={styles.headingTwo}>Heading Two</h2>

            <Field
              id="firstName"
              name="firstName"
              className={styles.firstName}
              placeholder="First Name"
              autoFocus
            />

            <Field
              id="lastName"
              name="lastName"
              className={styles.lastName}
              placeholder="Last Name"
            />

            <Field
              id="title"
              name="title"
              className={styles.title}
              placeholder="Title"
            />

            <div
              className={
                errors.email && touched.email ? styles.emailRed : styles.email
              }
            >
              <Field id="email" name="email" placeholder="Email" />
              <div className={errors.email && styles.Error}>
                <ErrorMessage name="email" />
              </div>
            </div>

            <Field
              id="message"
              name="message"
              className={styles.message}
              placeholder="Message"
              as="textarea"
              maxLength="420"
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
