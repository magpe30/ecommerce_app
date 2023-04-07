import { useEffect, useState } from 'react';
import styles from './shop.module.scss';
import { useGetAllProductsQuery } from '../../features/productsApi';
import axiosConfig from '../../axiosConfig';

import Card from './Card/Card';
import Loader from '../Loader/Loader';

const Shop = () => {
    const { data, isLoading } = useGetAllProductsQuery();
    const [products, setProducts] = useState(null);
    const [ loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
      setProducts(data);
    }, [data]);

    const getCategory = async(category) => {
      try {
        setLoading(true);
        const data = await axiosConfig.get(
            `/api/v1/products/${category}`
        );
        const dataSet = data?.data;
        setProducts(dataSet?.products);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
          setLoading(false);
      }
    }

    const getData = () => {
      setProducts(data);
    }

    return (
        <>
            <div className={styles.shopContainer}>
              <div className={styles.header}>
                <h1>All candles</h1>
                <p>Please look through our inventory and pick a candle for your home</p>
                <div className={styles.links}>
                  <button onClick={() => getCategory("floral")}>floral</button>
                  <button onClick={() => getCategory("fruity")}>fruity</button>
                  <button onClick={() => getData()}>all</button>
                </div>
              </div>

            </div>
            <div className={styles.cardContainer}>
                { loading || isLoading ? <Loader /> :
                    (products && products.map((product, i) => (
                        <Card 
                          name={product?.name} 
                          source={product?.get_image} 
                          price={product?.price} 
                          key={`${i}-product-number`}
                          url={product?.get_absolute_url}
                        />
                    )))
                }
            </div>
        </>
    )
};

export default Shop;