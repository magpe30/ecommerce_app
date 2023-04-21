import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { increaseCart, removeFromCart, decreaseCart, getTotal } from '../../features/cartSlice'
import styles from './cart.module.scss';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotal())
    }, [cart, dispatch])
    
    const handleRemove = (cartItem) => {
        dispatch(removeFromCart(cartItem))
    };

    const handleDecrease = (cartItem) => {
        dispatch(decreaseCart(cartItem))
    }
    
    
    const handleIncrease = (item) => {
        dispatch(increaseCart(item))
    }

    return (
        <div className={styles.cartContainer}>
            <h1>Shopping cart</h1>
            {
                cart?.cartItems?.length === 0 ? 
                <div className={styles.emptyCart}>
                    <h1>Currently you have no items in your cart...</h1>
                    <p>Start shopping</p>
                    <Link to="/shop"><button>Shop</button></Link>
                </div> : 
                
                <div className={styles.productTable}>
                    <div className={styles.titles}>
                        <p>PRODUCT</p>
                        <p>PRICE</p>
                        <p>QUANTITY</p>
                        <p>TOTAL</p>
                    </div>
                    {
                        cart.cartItems?.map((cartItem, id) => (
                          <div key={`${cartItem}-item-${id}`}>
                            <div className={styles.item}>
                                <div className={styles.product}>
                                    <img src={cartItem.get_thumbnail}  alt={cartItem.name} />
                                    <div>
                                        <h3>{cartItem.name}</h3>
                                        <button 
                                          className={styles.remove}
                                          onClick={() => handleRemove(cartItem)}
                                        >Remove</button>
                                    </div>
                                </div>
                                <div className={styles.price}>
                                    ${cartItem.price}
                                </div>
                                <div className={styles.quantity}>
                                    <button onClick={() => handleDecrease(cartItem)}>-</button>
                                    <div className={styles.count}>{cartItem.quantity}</div>
                                    <button onClick={() => handleIncrease(cartItem)}>+</button>
                                </div>
                                <div className={styles.total}>
                                    ${ cartItem.price * cartItem.quantity }
                                </div>
                            </div>
                          </div>    
                        ))
                    }
                    <div className={styles.summary}>
                        <div className={styles.checkout}>
                            <span>Subtotal</span>
                            <span className={styles.amount}>
                                ${cart.cartTotalAmount}
                            </span>
                            <p>Taxes added at the checkout</p>
                            {
                                token ? <button className={styles.checkoutButton}><Link to="/checkout">Checkout</Link></button> :
                                <button className={styles.checkoutButton}><Link to="/login">Login to checkout</Link></button>
                            }
                          
                        </div>
                    </div>
                </div>
            }
        </div>
    )
};

export default Cart;
