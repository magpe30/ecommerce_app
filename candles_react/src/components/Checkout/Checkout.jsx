import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { CardElement } from '@stripe/react-stripe-js';

import { clearCart } from '../../features/cartSlice';

import axiosConfig from '../../axiosConfig';

import styles from './checkout.module.scss';
;

const Checkout = ({stripe, elements}) => {
    const [stripeError, setStripeError] = useState('');
    const cart = useSelector(state => state.cart);
    const token = useSelector(state => state.auth.token);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const TAX = 0.08;
    const total = cart.cartTotalAmount + (cart.cartTotalAmount * TAX);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = async(data) => {
        const tokenHandler = async (token) => {
            const items = [];

            for(let i = 0; i < cart.cartItems.length; i++) {
                const item = cart.cartItems[i];
                const itemObj = {
                    product: item.id,
                    quantity: item.quantity,
                    price: item.price * item.quantity,
                }

                items.push(itemObj)
            }
            
            const finalData = {
                'first_name': data.firstName,
                'last_name': data.lastName,
                'email': data.email,
                'address': data.addressLine1 + "," + data.addressLine2,
                'zipcode': data.zipcode,
                'city': data.city,
                'phone': data.phoneNumber,
                'items': items,
                'stripe_token': token,

            }

            await axiosConfig.post('/api/v1/checkout/', finalData)
                .then(response => {
                    dispatch(clearCart());
                    navigate('/cart/success');
                })
                .catch(error => {
                    console.log(error);
                })
        }

        if (!stripe || !elements) {
            return;
        }

        const result = await stripe.createToken(elements.getElement(CardElement));
        if (result.error) {
           setStripeError(result.error.message);
        } else {
            axiosConfig.defaults.headers.common["Authorization"] = "Token " + token;
            tokenHandler(result.token.id)
        }
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
                    {...register('phoneNumber', { required: true, minLength: 7})}
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
                <div>
                    <h3>Total: ${total} (taxes included)</h3>
                </div>
                <p>Card details</p>
                <CardElement />
                {stripeError && <p className={styles.error}>{stripeError}</p>}
                <button type="submit">
                    Pay with Stripe
                </button>
            </form>
        </div>
    )
};

export default Checkout;