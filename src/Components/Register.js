import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import "bootstrap/dist/css/bootstrap.css";
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const Navigate = useNavigate()
    const initialValues = {
        Prenom: "",
        Nom: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false,
    };

    const handleSubmit = async (values) => {
        try {
            await axios.post(' http://localhost:3000/users', values)
            alert('ajouter avec success');
            Navigate ('/Login')
        } catch (error) {
            console.log(error)
        }
    }
    const validationSchema = Yup.object().shape({
        Nom: Yup.string()
                    .required("Ce champ est obligatoire"),
        Prenom: Yup.string()
            .required("Ce champ est obligatoire"),
        email: Yup.string()
            .email("email invalide")
            .required("l'email est obligatoire"),
        password: Yup.string()
            .required("Mot de passe est obligatoire")
            .min(8, "Mot de passe doit être plus grand que 8 caractères"),
        confirmPassword: Yup.string()
            .required("Confirmation de mot de passe est obligatoire")
            .oneOf(
                [Yup.ref("password"), null],
                "Le mot de passe de confirmation ne correspond pas"
            ),
    });
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="text-center text-primary mb-4">Inscription</h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => handleSubmit(values)}
                    >
                        {({ resetForm }) => (
                            <Form>
                                <div className="form-group mb-3">
                                    <label htmlFor="Nom" >
                                        Nom:
                                    </label>
                                    <Field
                                        type="text"
                                        id="Nom"
                                        name="Nom"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="Nom"
                                        component="small"
                                        className="text-danger"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="Prenom">
                                        Prénoms:
                                    </label>
                                    <Field
                                        type="text"
                                        id="Prenom"
                                        name="Prenom"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="Prenom"
                                        component="small"
                                        className="text-danger"
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="email">
                                        Email:
                                    </label>
                                    <Field
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="small"
                                        className="text-danger"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password">
                                        Mot de passe:
                                    </label>
                                    <Field
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="password"
                                        component="small"
                                        className="text-danger"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="confirmPassword">
                                        Confirmer le mot de
                                        passe:
                                    </label>
                                    <Field
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="confirmPassword"
                                        component="small"
                                        className="text-danger"
                                    />
                                </div>

                                <div className="form-group d-flex justify-content-center gap-3">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        S'inscrire
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


export default Register 