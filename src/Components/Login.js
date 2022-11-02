import axios from 'axios'
import { Formik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()

    return (
        
        <div className="container">
            <div className="row">
            <div className="col-md-6 offset-md-3">
                    <Formik
                        initialValues={{
                             email: '', 
                             password: '' 
                            }}
                        validate={values => {
                            const errors = {};
                            if ((!values.password)) {
                                errors.password = 'Password obligatoire';
                            }
                            if ((!values.email)) {
                                errors.email = 'Email obligatoire';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                            }
                            return errors;
                        }}
                        onSubmit={async (values) => {

                            const users = await axios.get('http://localhost:3000/users')
                            const errorsSub = {};
                            const found = users.data.find(user => user.email === values.email && user.password === values.password)
                            if (found) {
                                navigate('/ListTodo')

                            } else {
                                alert('Email ou mots de passe incorrect')
                            }
                            return errorsSub;
                        }}>
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <form className='mt-4' onSubmit={handleSubmit}>
                                <h1 className="text-center text-primary">Identifier-vous <i className="fa-solid fa-user"></i></h1>
                                <div className="mb-3">
                                    <label>E-mail:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control "
                                        placeholder="Votre E-mail"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    <div
                                        className="text-danger"
                                    >
                                        {errors.email && touched.email && errors.email} </div>
                                </div>

                                <div className="mb-3">
                                    <label>Mots de passe:</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Votre mots de passe"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                    <div
                                        className="text-danger"
                                    >
                                        {errors.password && touched.password && errors.password} </div>
                                </div>

                                <div className="btn1">
                                    <button className="btn btn-danger btn-lg mb-4 me-3"
                                        id="connexion" type="submit"
                                        disabled={isSubmitting}>
                                        Connexion
                                    </button>
                                    <button className="btn btn-danger
                                     btn-lg mb-4 me-3"
                                        id="connexion"
                                        type="submit">
                                        Annuler
                                    </button>

                                </div>
                                <Link className="text-dark mb-4" to='/Register'>S'inscrire</Link>
                            </form>
                        )}
                    </Formik>
                </div>

            </div>
        </div>
    )
}

export default Login