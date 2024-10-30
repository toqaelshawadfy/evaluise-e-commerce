import React from 'react';
import loginimg from '../../Images/Frame 760.png';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import './LogIn.css';
import { logIn } from '../../Reducers/ReducerAuth';

export default function LogIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.auth.error);

  const validationSchema = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/, 'Password must start with an uppercase').required('Password is required')
  });

  const logInSubmit = (values) => {
    console.log("Form values:", values); // Debug log to check values
    const isLogging = dispatch(logIn(values)); // Pass values directly
    if (isLogging) {
      navigate('/');
    }
  };

  const Formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: logInSubmit
  });

  return (
    <div className="login mt-5">
      <div className="my-5">
        <div className="row d-flex align-items-center ">
          <div className="col-md-6">
            <img src={loginimg} alt="loginimg" className="w-100" />
          </div>
          <div className="col-md-6 ">
            <div className="container w-75">
            <div className="logtitle">
              <h3>Log in to Exclusive</h3>
              <p className='mt-3'>Enter your details below</p>
            </div>
            <div className="logform">
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              <form onSubmit={Formik.handleSubmit}>
                <input
                  type="email"
                  className="logininput"
                  name="email"
                  id="email"
                  placeholder="Email or Phone Number"
                  value={Formik.values.email}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
                {Formik.errors.email && Formik.touched.email && (
                  <div className="alert alert-danger mt-2" role="alert">
                    {Formik.errors.email}
                  </div>
                )}
                <input
                  type="password"
                  className="logininput mt-4"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={Formik.values.password}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
                {Formik.errors.password && Formik.touched.password && (
                  <div className="alert alert-danger mt-2" role="alert">
                    {Formik.errors.password}
                  </div>
                )}
                <div className="logbtns d-flex justify-content-between align-items-center mt-5">
                  <button type="submit" disabled={!(Formik.isValid && Formik.dirty)} className="logbtn">
                    Log in
                  </button>
                  <span>Forget Password?</span>
                </div>
              </form>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
