import React from 'react';
import PropTypes from 'prop-types';
import styles from './author.module.scss';

const Author = ({url, name, bio}) => {
    return (
        <div className={styles.authorCardContainer}>
            <img  src={url} className={styles.picture}/>
            <p><strong>By {name}</strong></p>
            <p>{bio}</p>
        </div>
    )
};

export default Author;

Author.propTypes = {
    url: PropTypes.string, 
    name: PropTypes.string, 
    bio: PropTypes.string,
}