import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/index';
import styles from './categories.module.scss';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
       getCategories()
        .then((newCategories) => setCategories(newCategories));
    }, []);

    console.log(categories?.categories)
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