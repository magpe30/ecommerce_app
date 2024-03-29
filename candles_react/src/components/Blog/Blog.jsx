import React from 'react';
import { useEffect, useState } from 'react';
import { ALL_POSTS, GRAPHQL_API } from './services/index';

import { request } from 'graphql-request'

import PostCard from './PostCard/PostCard';
import Categories from './Categories/Categories';
import Loader from '../Loader/Loader';
import styles from './blog.module.scss';

const Blog = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
          setIsLoading(true);
          const { postsConnection: edges } = await request(GRAPHQL_API, ALL_POSTS);
          setData(edges)
        };
    
        fetchPosts().then(() => setIsLoading(false))
    }, []);

    if(isLoading) {
        return <Loader />
    }

    return (
        <div className={styles.blogContainer}>
            <h1 className={styles.title}>Candles Stories</h1>
            <div className={styles.blogContent}>
                <div className={styles.posts}>
                    <PostCard data={data}/>      
                </div>
                <div className={styles.widgets}>
                    <Categories />
                </div>
            </div>
        </div>
    )
};

export default Blog;