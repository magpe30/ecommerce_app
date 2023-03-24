import styles from './loader.module.scss';

const Loader = () => {
    return (
        <div className={styles.loaderContainer}>
            <div className={styles.loader}>
                <svg className={styles.circular} viewBox="25 25 50 50">
                <circle className={styles.path} cx="50" cy="50" r="20" fill="none" strokeWidth="3" strokeMiterlimit="10"/>
                </svg>
            </div>
        </div>
    )
};

export default Loader;