import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required!"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required!"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameId = useId();
  const numberId = useId();

  const handleSubmit = ({ name, number }, actions) => {
    dispatch(
      addContact({
        id: nanoid(),
        name,
        number,
      })
    );

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameId}>Name</label>
        <Field
          type="text"
          name="name"
          id={nameId}
          className={css.field}
        ></Field>
        <ErrorMessage
          name="name"
          component="span"
          className={css.error}
        ></ErrorMessage>

        <label htmlFor={numberId}>Number</label>
        <Field type="tel" name="number" id={numberId} className={css.field} />
        <ErrorMessage
          name="number"
          component="span"
          className={css.error}
        ></ErrorMessage>

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
