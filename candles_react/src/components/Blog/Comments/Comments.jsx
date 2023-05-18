import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { getComments } from '../services/index';
import styles from './comments.module.scss';

const Comments = ({ slug }) => {
    const [comments, setComments] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        getComments(slug).then((res) => setComments(res)).catch((err) => setError(err));
    }, []);
   
    if(error) {
       return <p>We are sorry but we cannot load comments, please come back in after some time</p>
    }

    return (
        <div className={styles.commentsBlockContainer}>
            <p className={styles.header}>{comments?.length} Comments:</p>
            <div className={styles.commentsBlock}>
                {
                    comments?.map((comment, index) => 
                        <div key={index}>
                            <p><strong>{comment?.name}</strong> wrote on {moment(comment?.createdAt).format('MMM DD, YYYY')}</p>
                            <p>{comment?.comment}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
};

export default Comments;

Comments.propTypes = {
    slug: PropTypes.string,
}