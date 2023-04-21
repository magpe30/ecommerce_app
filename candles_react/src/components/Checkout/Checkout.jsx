import { useForm } from "react-hook-form";
import styles from './checkout.module.scss';

const Checkout = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className={styles.checkoutContainer}>
            <h1>Shipping Details</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.formBlock}>
                <label>First name</label>
                <input
                    type="text"
                    {...register("firstName", { required: true, maxLength: 20 })}
                />
                {errors.firstName && (
                    <p className={styles.error}>First name is required and must have max 20 characters</p>
                )}

                <label>Last name</label>
                <input
                    type="text"
                    {...register("lastName", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i  })}
                />
                {errors.lastName && (
                    <p className={styles.error}>Username is required and must have max 20 characters</p>
                )}

                <label>E-mail</label>
                <input
                    type="text"
                    {...register("email", { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })}
                />
                {errors.email && <p className={styles.error}>Email is required and must be valid</p>}
                
                <label>Phone number</label>
                <input
                    type="text"
                    placeholder="(000) 000-0000"
                    {...register('phoneNumber', { required: true, pattern: /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/ })}
                />
                {errors.phoneNumber && <p className={styles.error}>Phone number is required and must be valid</p>}
                <div className={styles.addressContainer}>
                    <div className={styles.addressRow}>
                        <label>Address Line 1</label>
                        <input
                            type="text"
                            {...register("addressLine1", { required: true })}
                        />
                        {errors.addressLine1 && <p className={styles.error}>Address is required</p>}
                    </div>
                    <div className={styles.addressRow}>
                        <label>Address Line 2</label>
                        <input
                            type="text"
                            {...register("addressLine2", { required: false })}
                        />
                    </div>
                </div>
                <div className={styles.addressContainer}>
                    <div className={styles.addressRow}>
                        <label>City</label>
                        <input
                            type="text"
                            {...register("city", { required: true })}
                        />
                        {errors.city && <p className={styles.error}>City is required</p>}
                    </div>
                    <div className={styles.addressRow}>
                        <label>Zip code</label>
                        <input
                            type="text"
                            {...register("zipcode", { required: true, pattern: /^\d{5}(?:[-\s]\d{4})?$/ })}
                        />
                        {errors.zipcode && <p className={styles.error}>Zipcode is required</p>}
                    </div>
                </div>

                <button type="submit">
                    Pay with Stripe
                </button>
            </form>
        </div>
    )
};

export default Checkout;