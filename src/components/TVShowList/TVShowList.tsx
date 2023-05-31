import React, {FC} from 'react';
import styles from './TVShowList.module.css';
import {TVShowModel} from "../../models/TVShowModel";
import TvShowListItem from "../TVShowListItem/TVShowListItem";

interface TvShowListProps {
    tvShowList: TVShowModel[]

    onClick: (tvShow: TVShowModel) => void
}

const TvShowList: FC<TvShowListProps> = (props) => (
    <div className={styles.TvShowList}>
        <div className={styles.title}>You'll probably like :</div>
        <div className={styles.list}>
            {props.tvShowList.map((tvShow) => {
                return (
                    <span className={styles.TVShowItem} key={tvShow.id}>
                  <TvShowListItem tvShow={tvShow} onClick={props.onClick}/>
                      </span>
                )
            })}
        </div>
    </div>
);

export default TvShowList;
