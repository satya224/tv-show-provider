import React, {FC} from 'react';
import styles from './SearchList.module.css';
import {TVShowModel} from "../../models/TVShowModel";

interface SearchListProps {
    tvShows: TVShowModel[]
    selectSearch: (value: string) => {}
}

const SearchList: FC<SearchListProps> = (props) => {
    const clickHandel = (e: any) => {
        props.selectSearch(e.target.innerHTML)
    }
    return (
        <div className={styles.SearchList + "  col-12 col-lg-4"}>
            {props.tvShows.map(tvShow => {
                return (
                    <div className={styles.searchItem} key={tvShow.id}
                         onClick={clickHandel}>{tvShow.name}</div>
                )
            })}
        </div>
    )
};

export default SearchList;
