import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';
import Loader from '../Loader/Loader';
import axiosConfig from '../../axiosConfig';

import styles from './product.module.scss';

const Product = () => {
    const [product, setProduct] = useState(null);
    const [val, setVal] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const { category_slug, product_slug } = useParams();
    const dispatch = useDispatch();

    const getProduct = async() => {
        try {
          setIsLoading(true);
          const data = await axiosConfig.get(
              `/api/v1/products/${category_slug}/${product_slug}`
          );
          const dataSet = data?.data;
          setProduct(dataSet);
        } catch (error) {
          setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
      getProduct();
    },[]);

    const handleChange = (e) => {
        e.preventDefault();
        const regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
          setVal(e.target.value);
        }
    };

    if(isLoading) {
        return <Loader />
    }

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    return (
        <div className={styles.product}>
            <div className={styles.header}>
                <h1>{product?.name}</h1>
            </div>
            <div className={styles.productContainer}>
                <div className={styles.imgContainer}>
                    <img src={product?.get_image} alt="a candle with a sticker that reads orange"/>
                </div>
                <div className={styles.infoContainer}>
                    <h1>${product?.price}</h1>
                    <p>{product?.description}</p>
                    <span>Scent: {category_slug}</span>

                    <div className={styles.cartContainer}>
                    <input
                        placeholder="1"
                        type="number"
                        value={val}
                        onChange={handleChange}
                    />
                        <button disabled={!val} onClick={() => handleAddToCart({...product, quantity: val })}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Product;