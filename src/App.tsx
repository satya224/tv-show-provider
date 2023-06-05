import React, {useEffect, useState} from 'react';
import styles from './App.module.css'
import {TVShowAPI} from "./api/TVShowAPI";
import {BACKDROP_BASE_URL} from "./config";
import TVShowDetail from "./components/TVShowDetail/TVShowDetail";
import Logo from "./components/Logo/Logo";
import logoImg from "./assets/images/logo.png"
import {TVShowModel} from "./models/TVShowModel";
import {INITIAL_TV_SHOW} from "./models/initial-tv-show";
import TvShowList from "./components/TVShowList/TVShowList";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchList from "./components/SearchList/SearchList";

function App() {
    const [currentTVShow, setCurrentTVShow] = useState<TVShowModel>(INITIAL_TV_SHOW);
    const [recommendationList, setRecommendationList] = useState<TVShowModel[]>([INITIAL_TV_SHOW]);
    const [searchList, setSearchList] = useState<TVShowModel[]>([])
    const fetchPopularTVShowList = async () => {
        let popularTVShowList: TVShowModel[] = await TVShowAPI.fetchPopulars();
        popularTVShowList = popularTVShowList.filter((tvShow) => tvShow.backdrop_path
            != null)
        if (popularTVShowList.length > 0)
            setCurrentTVShow(popularTVShowList[Math.floor(Math.random() * 10)]);
    }
    const fetchRecommendations = async (tvShowId: number) => {
        let recommendationListRes: TVShowModel[] = await TVShowAPI.fetchRecommendations(tvShowId);
        recommendationListRes = recommendationListRes.filter((tvShow) => tvShow.backdrop_path
            != null)
        if (recommendationListRes.length > 0)
            setRecommendationList(recommendationListRes);
    }
    const fetchByTitle = async (title: string) => {
        let searchResponse: TVShowModel[] = await TVShowAPI.fetchByTitle(title);
        searchResponse = searchResponse.filter((tvShow) => tvShow.backdrop_path
            != null)
        if (searchResponse.length > 0)
            setCurrentTVShow(searchResponse[0]);
        setSearchList([]);
    }

    const fetchList = async (title: string) => {
        let searchResponse: TVShowModel[] = await TVShowAPI.fetchByTitle(title);
        searchResponse = searchResponse.filter((tvShow) => tvShow.backdrop_path
            != null)
        setSearchList(searchResponse);
    }
    useEffect(() => {
        fetchPopularTVShowList().then()
    }, [])

    useEffect(() => {
        fetchRecommendations(currentTVShow.id).then()
    }, [currentTVShow])

    const updateCurrentTVShow = (tvShow: TVShowModel) => {
        setCurrentTVShow(tvShow)
    }

    return (
        <div className={styles.App} style={{
            background: currentTVShow
                ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
             url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
                : "black",
        }}>
            <div className={styles.header}>
                <div className={"row"}>
                    <div className={"col-4"}>
                        <Logo img={logoImg} title={"TV Show"} subtitle={"Find a show you may like"}/>
                    </div>
                    <div className={"col-md-12 col-lg-4"}>
                        <SearchBar onSubmit={fetchByTitle} onSearch={fetchList}/>
                        {searchList.length > 0 ? <SearchList tvShows={searchList} selectSearch={fetchByTitle}/> : null}

                    </div>
                </div>
            </div>
            <div className={styles.tv_show_detail}><TVShowDetail tvShow={currentTVShow}/></div>
            <div className={styles.recommended_tv_shows}>
                <TvShowList tvShowList={recommendationList} onClick={updateCurrentTVShow}/>
            </div>
        </div>
    );
}

export default App;
