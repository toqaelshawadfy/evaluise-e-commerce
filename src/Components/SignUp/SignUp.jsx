import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import signupimg from '../../Images/Frame 760.png';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import google from '../../Images/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png';
import './SignUp.css';
import { signUp } from '../../Reducers/ReducerAuth';

export default function SignUp() {
    const [error, setError] = useState(null); 
    let navigate = useNavigate();
    const dispatch = useDispatch();

    // Validation schema using Yup
    let validationSchema = Yup.object({
        name: Yup.string()
            .min(3, 'Name minlength is 3')
            .max(20, 'Name maxlength is 20')
            .required('Name is required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .matches(/^[A-Z][a-z0-9]{5,10}$/, 'Password must start with an uppercase letter')
            .required('Password is required'),
    });

    const SubmitRegister = (values) => {
        setError(null);
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        const isEmailTaken = existingUsers.some(user => user.email === values.email);
        
        if (isEmailTaken) {
            setError("An account with this email already exists."); 
        } else {
            dispatch(signUp(values));
            navigate('/login'); 
        }
    };

    // Formik for handling form validation and submission
    let formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: SubmitRegister,
    });

    return (
        <div className="signup mt-5">
            <div className="my-5">
                {/* Display error message if email is already taken */}
                {error && <div className="alert alert-danger">{error}</div>}
                
                <div className="row d-flex align-items-center">
                    <div className="col">
                        <img src={signupimg} alt="signup" className="w-100 signupimg" />
                    </div>
                    <div className="col d-flex justify-content-center">
                        <div className="signuppra">
                            <div className="signtitle">
                                <h3>Create an account</h3>
                            </div>
                            <p>Enter your details below</p>
                            <div className="signinp">
                                <form onSubmit={formik.handleSubmit}>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.name && formik.touched.name && (
                                        <div className="alert alert-danger mt-2">{formik.errors.name}</div>
                                    )}
                                    <input
                                        type="email"
                                        name="email"
                                        className=" mt-4"
                                        id="signemail"
                                        placeholder="Email or Phone Number"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.email && formik.touched.email && (
                                        <div className="alert alert-danger mt-2">{formik.errors.email}</div>
                                    )}
                                    <input
                                        type="password"
                                        name="password"
                                        className=" mt-4"
                                        id="signpassword"
                                        placeholder="Password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.errors.password && formik.touched.password && (
                                        <div className="alert alert-danger mt-2">{formik.errors.password}</div>
                                    )}
                                 <div className=''>   <button
                                        disabled={!(formik.isValid && formik.dirty)}
                                        className="submitbtn mt-4 d-block w-100"
                                        type="submit"
                                    >
                                        Create Account
                                    </button></div>
                                    <div className=''>   <button
                                        className="submitgooglebtn mt-2 d-block w-100"
                                        type="submit"
                                    >
                                        <img src={google} className='googleimg'></img>Sign Up With Google
                                    </button></div>
                                </form>
                               <div className='text-center mt-3'>
                               <span>
                                    Already have an account?
                                    <Link to="/login" color='gray'>
                                        <span style={{ textDecoration: 'underline' ,color:"gray"}}>Login</span>
                                    </Link>
                                </span>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
