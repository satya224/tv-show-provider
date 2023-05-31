import React, {FC} from 'react';
import styles from './TVShowDetail.module.css';
import FiveStarRating from "../FiveStarRating/FiveStarRating";

interface TvShowDetailProps {
    tvShow: any
}

const TvShowDetail: FC<TvShowDetailProps> = ({tvShow}) => {
    const rating = parseFloat((tvShow.vote_average / 2).toFixed(2))
    return (
        <div className={styles.TvShowDetail}>
            <div className={styles.title}>{tvShow.name}</div>
            <div className={styles.rating_container}>
                <FiveStarRating rating={rating}/>
                <span className={styles.rating}>{rating} / 5</span>
            </div>

            <div className={styles.overview}>{tvShow.overview}</div>
        </div>
    )
};

export default TvShowDetail;
