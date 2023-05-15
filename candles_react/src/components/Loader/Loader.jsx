import React from 'react';
import styles from './loader.module.scss';
import PropTypes from 'prop-types';

const Loader = ({ size }) => {
    return (
        <div className={size === 'small' ? styles.loaderContainerSmall : styles.loaderContainerBig}>
            <div className={size === 'small' ? styles.loaderSmall : styles.loaderBig}>
                <svg className={styles.circular} viewBox="25 25 50 50">
                <circle className={styles.path} cx="50" cy="50" r="20" fill="none" strokeWidth="3" strokeMiterlimit="10"/>
                </svg>
            </div>
        </div>
    )
};

export default Loader;

Loader.propTypes = {
    size: PropTypes.string,
}