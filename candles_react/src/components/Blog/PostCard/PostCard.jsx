import styles from './postCard.module.scss';

const PostCard = ({ data }) => {
    const posts = data?.edges;
    console.log(data);
    return (
        <div>
            {
                posts?.map((item) =>  
                    <div className={styles.postCardContainer}>
                      <img src={item?.node?.featuredImage.url} alt={item?.node.title}></img>
                      <div className={styles.infoContainer}>
                        <div className={styles.author}>
                            <img src={item?.node.author.photo.url} alt={item?.node.author.name}/>
                            <p>By {item?.node.author.name}</p>
                        </div>
                        <p className={styles.categories}>{item?.node.categories[0].name}</p>
                      </div>
                      <div className={styles.postCardText}>
                        <h2>{item?.node.title}</h2>
                        <p>{item?.node?.excerpt}</p>
                      </div>
                    </div>)
            }
        </div>
    )
};

export default PostCard;