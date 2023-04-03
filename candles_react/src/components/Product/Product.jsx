import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import axiosConfig from '../../axiosConfig';

import styles from './product.module.scss';

const Product = () => {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const { category_slug, product_slug } = useParams();

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

    if(isLoading) {
        return <Loader />
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
                        <form>
                           <input
                            type={"number"}
                            pattern="^[0-9]+$"
                            inputMode={"numeric"}
                            min={1}
                            placeholder={1}
                           ></input>
                           <button>Add to Cart</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Product;