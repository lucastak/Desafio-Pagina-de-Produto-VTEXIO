import React from "react";
import styles from "./NewsLetterForm.Module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormSchema from "./schema/NewsLetterSchema";

interface IFormikValues {
    email: string;
}
const initialValues = {
    email: "",
};

export default function NewsLetter() {
    const handleClickNewsLetterSubmit = (values: IFormikValues) => {
        return console.log(values);
    };

    return (
        <div className={styles["newsletter__container"]}>
            <Formik
                initialValues={initialValues}
                onSubmit={handleClickNewsLetterSubmit}
                validationSchema={FormSchema}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className={styles["newsletter__title"]}>
                            <h2>Assine a nossa newsletter</h2>
                        </div>

                        <div className={styles["newsletter__subtitle"]}>
                            <h3>Receba ofertas e novidades por e-mail</h3>
                        </div>
                        <div className={styles["newsletter__input-container"]}>
                            <Field
                                id="email"
                                name="email"
                                placeholder="Seu e-mail"
                                className={
                                    errors.email && touched.email && "invalid"
                                }
                            />
                            <ErrorMessage
                                component="span"
                                name="email"
                                className={
                                    styles["newsletter__invalid-feedback"]
                                }
                            />
                            <button
                                type="submit"
                                className={styles["newsletter__button-submit"]}
                            >
                                ENVIAR
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
