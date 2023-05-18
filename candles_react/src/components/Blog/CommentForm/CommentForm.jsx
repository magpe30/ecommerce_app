import React, { useRef, useState, useEffect} from 'react';
import { submitComment } from '../services/api';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import Error from '../../NotFound/Error';
import styles from './commentForm.module.scss';

const CommentForm = ({ slug }) => {
    const [isError, setIsError] = useState(false);
    const [apiError, setApiError] = useState(null);

    useEffect(() => {
        nameElement.current.value = window.localStorage.getItem('name');
        emailElement.current.value = window.localStorage.getItem('email');
    },[]);

    const commentElement = useRef();
    const nameElement = useRef();
    const emailElement = useRef();
    const storeDataElement = useRef();

    const handleSubmit = () => {
        setIsError(false);

        const { value: comment } = commentElement.current;
        const { value: name } = nameElement.current;
        const { value: email } = emailElement.current;
        const { checked: storeData } = storeDataElement.current;
        
        if(!comment || !name || !email) {
            setIsError(true);
            return;
        }

        const commentObj = {
            name, 
            email,
            comment, 
            slug
        }

        if(storeData) {
            window.localStorage.setItem('name', name);
            window.localStorage.setItem('email', email);
        } else {
            window.localStorage.removeItem('name', name);
            window.localStorage.removeItem('email', email);
        }

        submitComment(commentObj).then(() => toast.success("Comment was added successfully", {
            position: "top-left",
        })).catch(error => setApiError(error));
    }
    
    if(apiError) {
        return <Error />
    }

    return (
        <div className={styles.commentsContainer}>
            <h3>Leave a comment:</h3>
            <div>
                <textarea  
                    placeholder="Comment"
                    name="comment"
                    ref={commentElement}
                    className={styles.textarea}
                />
            </div>
            <div className={styles.credentials}>
                <input 
                    type='text'
                    placeholder="Name"
                    name="name"
                    ref={nameElement}
                />
                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    ref={emailElement}
                />
            </div>
            <div className={styles.checkbox}>
                <input 
                    ref={storeDataElement}
                    type="checkbox"
                    id="storeData"
                    name="storeData"
                />
                <label htmlFor="storeData">
                    Save my e-mail and name for the next time I comment.
                </label>
            </div>
            {isError && <p>All fields are required!</p>}

            <div className={styles.buttonContainer}>
                <button
                  type="button" 
                  className={styles.commentButton} 
                  onClick={() => handleSubmit()}
                >
                    Share comment
                </button>
            </div>
        </div>
    )
};

export default CommentForm;

CommentForm.propTypes ={
    slug: PropTypes.string
}