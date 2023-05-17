import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPostDetails } from '../services/index';
import { getContentFragment } from '../../../utilities';
import moment from 'moment';
import Author from '../Author/Author';
import CommentForm from '../CommentForm/CommentForm';
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
                    <p>By {post?.author.name}</p>
                </div>
                <p>{moment(post?.createdAt).format('MMM DD, YYYY')}</p>
            </div>
            <div className={styles.content}>
            {post?.content.raw.children.map((typeObj, index) => {
              const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

              return getContentFragment(index, children, typeObj, typeObj.type);
            })}
            </div>
            <Author 
                url={post?.author?.photo.url}
                name={post?.author.name}
                bio={post?.author.bio}
            />
            <CommentForm slug={post_slug}/>
        </div>
    )
};

export default Post;