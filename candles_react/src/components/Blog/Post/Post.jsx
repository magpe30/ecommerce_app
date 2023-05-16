import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPostDetails } from '../services/index';
import moment from 'moment';
import Loader from '../../Loader/Loader';
import Error from '../../NotFound/Error';

import styles from './post.module.scss';

const Post =() => {
    const [post, setPost] = useState(null);
    const [isError, setIsError] = useState(null);
    const [loading, setLoading] = useState(false);
    const {post_slug } = useParams();

    useEffect(() => {
        setLoading(true);
        getPostDetails(post_slug)
        .then((currentPost) => setPost(currentPost))
        .catch((err) => setIsError(err))
        .finally(setLoading(false));
    }, []);
    
    if(loading) {
        return <Loader size={'big'}/>
    }

    if(isError) {
        return <Error />
    }
    
    return (
        <div className={styles.postContainer}>
            <img src={post?.featuredImage?.url} className={styles.featuredImage} alt={post?.title}/>
            <h1>{post?.title}</h1>
            <div className={styles.postInfo}>
                <div className={styles.author}>
                    <img src={post?.author?.photo.url} alt={post?.author.name}/>
                    <p>By {post?.author.name}</p>
                </div>
                <p>{moment(post?.createdAt).format('MMM DD, YYYY')}</p>
            </div>
            <div className={styles.content}>
                <p>
                    {post?.content.text}
                </p>
            </div>
        </div>
    )
};

export default Post;