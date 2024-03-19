import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

    const contactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required field'),
        number: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').
            matches(/^[0-9]{3}-[0-9]{2}-[0-9]{2}$/, {
                message: "Invalid phone number",
                excludeEmptyString: true,
            })
            .required('Required field'),
});
 
const ContactForm = ({ onAdd }) => {
    
    const nameFieldId = useId();
    const numberFieldId = useId();


    return (
        <Formik 
            initialValues={{
                name: "",
                number: "",
            }}
            onSubmit={(values, action) => {
                onAdd({
          id: nanoid(),
          name: values.name,
          number: values.number,
        });
                action.resetForm();
            }}
            validationSchema={contactSchema}>
            <Form className={css.form}>
                <div>
                    <label htmlFor={nameFieldId}>Name</label>
                    <Field className={css.input} type="text" name="name" id={nameFieldId} />
                    <ErrorMessage className={css.ErrorMessage} name="name" component="span" style={{ color: "red" }} />
                </div>
                <div>
                    <label htmlFor={numberFieldId}>Number</label>
                    <Field className={css.input} type="tel" name="number" id={numberFieldId}
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
                        placeholder="XXX-XX-XX"/>
                    <ErrorMessage className={css.ErrorMessage} name="number" component="span" style={{ color: "red" }} />
                </div>
                <button className={css.button} type="submit">
                    Add contact
                </button>
            </Form>
            </Formik>
);
};
export default ContactForm;