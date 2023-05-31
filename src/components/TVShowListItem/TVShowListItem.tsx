import React, {FC} from 'react';
import styles from './TVShowListItem.module.css';
import {TVShowModel} from "../../models/TVShowModel";
import {SMALL_IMG_COVER_BASE_URL} from "../../config";

interface TvShowListItemProps {
    tvShow: TVShowModel
    onClick: (tvShow: TVShowModel) => void
}

const MAX_TITLE_CHAR: number = 30

const TvShowListItem: FC<TvShowListItemProps> = (props) => {
    const onClick_ = () => {
        props.onClick(props.tvShow)
    }
    return (
        <div className={styles.TvShowListItem} onClick={onClick_}>
            <img className={styles.image} alt={props.tvShow.name}
                 src={SMALL_IMG_COVER_BASE_URL + props.tvShow.backdrop_path}/>
            <div className={styles.title}>
                {props.tvShow.name.length > MAX_TITLE_CHAR ? props.tvShow.name.slice(0, MAX_TITLE_CHAR) + "..." : props.tvShow.name}
            </div>

        </div>
    )
};

export default TvShowListItem;
