import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

import axiosConfig from '../../axiosConfig';

import styles from './signin.module.scss';

const SignIn = () => {
    const navigate = useNavigate();
    const [isMatchingPasswords, setIsMatchingPasswords] = useState(true);
    const [signError, setSignError] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const onSubmit = async(data) => {
        if(data.password !== data.passwordConfirm) {
            setIsMatchingPasswords(false);
            return
        }

        const formData = {
            username: data.username,
            password: data.password,
        }

        await axiosConfig.post('/api/v1/users/', formData).then((res) => {
            if(res.status === 201) {
                toast.success("Thank you for creating an account", {
                    position: "top-right",
                });

                navigate("/login");
            }
        }).catch((err) => {
            setSignError(true);
        })


    };

    return (
        <section className={styles.formContainer}>
            <h1>Sign up</h1>
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

                <label>Confirm Password</label>
                <input
                    type="password"
                    {...register("passwordConfirm", { required: true })}
                />
                {errors.passwordConfirm && <p className={styles.error}>Confirm Password does not match password</p>}
                {!isMatchingPasswords && <p className={styles.error}>Passwords do not match</p>}
                {signError && <p className={styles.error}>Ups, something went wrong. Please try again</p>}
                <button type="submit">
                    Submit
                </button>
            </form>
            <p>Have an account already? <Link to='/login' className={styles.loginLink}>Login</Link></p>
        </section>
    );
};

export default SignIn;