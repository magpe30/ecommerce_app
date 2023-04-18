import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import styles from '../SignIn/signin.module.scss';

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = () => {

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
            <p>Don't have an account? <Link to='/signin' className={styles.loginLink}>Create account</Link></p>
        </section>
    )
};

export default Login;