import React, {useEffect, useState} from 'react';
import styles from './App.module.css'
import {TvShow} from "./api/tv-show";
import {INITIAL_TV_SHOW} from "./api/initial-tv-show";
import {BACKDROP_BASE_URL} from "./config";
import TVShowDetail from "./components/TVShowDetail/TVShowDetail";
import Logo from "./components/Logo/Logo";
import logoImg from "./assets/images/logo.png"

function App() {
    const [currentTVShow, setCurrentTVShow] = useState(INITIAL_TV_SHOW);

    const fetchPopularTVShowList = async () => {
        const popularTVShowList = await TvShow.fetchPopulars();
        if (popularTVShowList.length > 0)
            setCurrentTVShow(popularTVShowList[0]);
    }
    useEffect(() => {
        fetchPopularTVShowList().then()
    }, [])

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
                        <Logo img={logoImg} title={"WatoWatch"} subtitle={"Find a show you may like"}/>
                    </div>
                    <div className={"col-md-12 col-lg-4"}>
                        <input style={{width: "100%"}} type={"text"}/>
                    </div>
                </div>
            </div>
            <div className={styles.tv_show_detail}><TVShowDetail tvShow={currentTVShow}/></div>
            <div className={styles.recommended_tv_shows}>Recommended TV shows</div>
        </div>
    );
}

export default App;
