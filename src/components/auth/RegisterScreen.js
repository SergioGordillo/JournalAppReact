import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import validator from 'validator';

import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';
import { startRegisterUserData } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { errorMsg } = useSelector(state => state.ui)
    console.log (errorMsg);

    const [ formValues, handleInputChange ] = useForm ({
        userName: "",
        email: "sergio@gmail.com",
        password: "123456",
        password2: "123456"
    })

    const { userName, email, password, password2 } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (isFormValid()) {
            dispatch(startRegisterUserData(email, password, userName));
        }

    }

    const isFormValid = () => {

        if (userName.trim().length === 0) {
            dispatch(setError("Name is required"));
            return false; 
        } else if (!validator.isEmail(email)) {
            dispatch(setError("Email is not valid"));
            return false;
        } else if (password!==password2 || password.length < 5){
            dispatch(setError("Password should have at least 6 characters and match each other"));
            return false;
        }

        dispatch( removeError() );
        return true;
    }

    return (
        <>
        <h3 className="auth__title">Register</h3>

        <form onSubmit={handleSubmit}>

           { 
                errorMsg && 
                (<div className='auth__alert-error'>
                    { errorMsg }
                </div>) 
            }

            <input type="text"
                placeholder="Name"
                name="userName"
                className="auth__input"
                autoComplete="off"
                value= { userName }
                onChange={ handleInputChange }
            />

            <input type="text"
                placeholder="Email"
                name="email"
                className="auth__input"
                autoComplete="off"
                value= { email }
                onChange={ handleInputChange }
            />

            <input type="password"
                placeholder="Password"
                name="password"
                className="auth__input"
                value= { password }
                onChange={ handleInputChange }
            />

            <input type="password"
                placeholder="Confirm password"
                name="password2"
                className="auth__input"
                value= { password2 }
                onChange={ handleInputChange }
            />

            <button type="submit"
                    className="btn btn-primary btn-block mb-4"
            >
                Register
            </button>

            <Link to="/auth/login"
                  className="link mt-5">
                Already registered? 
            </Link>

        </form>
    </>
    )
}
