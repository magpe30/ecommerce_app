import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { login } from '../../features/authSlice';

import axiosConfig from '../../axiosConfig';
import styles from '../SignIn/signin.module.scss';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loginErrors, setLoginErrors] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async(data) => {
        axiosConfig.defaults.headers.common['Authorization'] = '';
        localStorage.removeItem('token');
        const formData = {
            username: data.username,
            password: data.password,
        }

        try {
            const response = await axiosConfig.post('/api/v1/token/login/', formData);
            const token = response.data.auth_token;
            dispatch(login(token));
            navigate('/cart')
        } catch (err) {
            if(err.response) {
                for (const property in err.response.data) {
                    setErrorMessages([...err.response.data[property]])
                }
            } else {
                setLoginErrors(true);
            }
        }
    };

    return (
        <section className={styles.formContainer}>
            <h1>Log in</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.formBlock}>
                <label>Username</label>
                <input
                    type="text"
                    {...register("username", { required: true, maxLength: 20 })}
                />
                {errors.username && (
                    <p className={styles.error}>Username is required and must have max 20 characters</p>
                )}

                <label>Password</label>
                <input
                    type="password"
                    {...register("password", { required: true })}
                />
                {errors.password && <p className={styles.error}>Password is required</p>}


                <button type="submit">
                    Login
                </button>
            </form>
            {loginErrors && <p>Ups something went wrong</p>}
            {
                errorMessages?.length > 0 && errorMessages.map((message) => (
                    <p key={message} className={styles.error}>{message}</p>
                ))
            }
            <p>Don't have an account? <Link to='/signin' className={styles.loginLink}>Create account</Link></p>
        </section>
    )
};

export default Login;