import React from 'react';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
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

const personSchema = yup.object({
  firstName: yup.string().defined(),
  lastName: yup.string().defined(),
  title: yup.string().defined(),
  email: yup.string().nullable().email(),
  message: yup.string().defined(),
});

interface MyFormValues extends yup.InferType<typeof personSchema> {}

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
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form className={styles.Form}>
          <h2 className={styles.headingTwo}>Heading Two</h2>
          <Field
            id="firstName"
            className={styles.firstName} 
            name="firstName"
            placeholder="First Name"
            autoFocus
          />

          <Field id="lastName" className={styles.lastName} name="lastName" placeholder="Last Name" />

          <Field id="title" className={styles.title}  name="title" placeholder="Title" />

          <Field id="email" className={styles.email} name="email" placeholder="Email" />

          <Field
            id="message"
            className={styles.message} 
            name="message"
            placeholder="Message"
            as="textarea"
            maxLength="420"
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
