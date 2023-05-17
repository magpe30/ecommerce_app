import React, { useRef, usaState, usaEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './commentForm.module.scss';

const CommentForm = ({ slug }) => {
    return (
        <div className={styles.commentsComtainer}>
            <h3>Comments:</h3>
        </div>
    )
};

export default CommentForm;

CommentForm.propTypes ={
    slug: PropTypes.string
}