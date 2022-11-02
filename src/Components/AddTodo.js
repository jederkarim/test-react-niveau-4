import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import "bootstrap/dist/css/bootstrap.css";
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddTodo = () => {
    const Navigate = useNavigate()
    const initialValues = {
        Name: "",
        description: "",
          };

    const handleSubmit = async (values) => {
        try {
            await axios.post(' http://localhost:3000/Todos', values)
            alert('Todo ajouter avec success');
            Navigate('/ListTodo')
        } catch (error) {
            console.log(error)
        }
    }
    const validationSchema = Yup.object().shape({
        Name: Yup.string()
            .required("Ce champ est obligatoire"),
        description: Yup.string()
            .required("Ce champ est obligatoire"),
    });
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="text-center text-primary mb-4">Add Todo</h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => handleSubmit(values)}
                    >
                        {({ resetForm }) => (
                            <Form>
                                <div className="form-group mb-3">
                                    <label htmlFor="Name" >
                                        Name:
                                    </label>
                                    <Field
                                        type="text"
                                        id="Name"
                                        name="Name"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="Name"
                                        component="small"
                                        className="text-danger"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="Name" >
                                        Déscription:
                                    </label>
                                    <Field
                                        type="text"
                                        id="description"
                                        name="description"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="description"
                                        component="small"
                                        className="text-danger"
                                    />
                                </div>
                                <div className="form-group d-flex justify-content-center gap-3">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Ajouter
                                    </button>
                                    <button
                                        type="button"
                                        onClick={resetForm}
                                        className="btn btn-danger"
                                    >
                                        Annuler
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};


export default AddTodo 