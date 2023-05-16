import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/index';
import styles from './categories.module.scss';

import Error from '../../NotFound/Error';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
       getCategories()
        .then((newCategories) => setCategories(newCategories))
        .catch(error => setIsError(error));
    }, []);

    if(isError) {
        return <Error />
    }

    return (
        <div className={styles.categoriesContainer}>
            <div className={styles.header}>
                <span className={styles.line}></span>
                <h3>Categories</h3>
                <span className={styles.line}></span>
            </div>
            <div className={styles.categories}>
                {
                    categories?.categories?.map((category) => 
                        <Link key={category?.slug} to={`/blog/catgeories/${category?.slug}`} className={styles.categoriesLink}>
                            <span>
                                {category?.name}
                            </span>
                        </Link>
                    )
                }
            </div>
        </div>
    )
};

export default Categories;