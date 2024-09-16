import { useId } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Enter in the format 123-45-67')
    .min(9, "Too Short!")
    .max(9, "Too Long!")
    .required("Name is required"),
});

export default function ContactForm({ onAdd }) {
  const userNameId = useId();
  const userNumber = useId();

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={(values, actions) => {
        values.id = nanoid();
        onAdd(values);
        actions.resetForm();
      }}
      validationSchema={validationSchema}
    >
      <Form className={css.contactForm}>
        <div className={css.divContact}>
          <label htmlFor={userNameId}>Name</label>
          <Field type="text" name="name" id={userNameId} />
          <ErrorMessage
            className={css.formError}
            name="name"
            component="span"
          />
        </div>
        <div className={css.divContact}>
          <label htmlFor={userNumber}>Number</label>
          <Field type="tel" name="number" id={userNumber} />
          <ErrorMessage
            className={css.formError}
            name="number"
            component="span"
          />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}