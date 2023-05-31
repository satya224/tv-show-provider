import React, {FC} from 'react';
import styles from './FiveStarRating.module.css';
import {Star, StarFill, StarHalf} from "react-bootstrap-icons";

interface FiveStarRatingProps {
    rating: number
}


const FiveStarRating: FC<FiveStarRatingProps> = ({rating}) => {
    const startList = []
    let count = 5;
    let starFillCount: number = Math.floor(rating);
    let starHalfCount: number = rating - starFillCount >= 0.5 ? 1 : 0;
    let starCount: number = count - starFillCount - starHalfCount;
    while (starFillCount-- !== 0) {
        startList.push(<StarFill key={count--}/>)
    }
    if (starHalfCount === 1) {
        startList.push(<StarHalf key={count--}/>)
    }
    while (starCount-- !== 0) {
        startList.push(<Star key={count--}/>)
    }
    return (
        <div className={styles.FiveStarRating}>
            {startList}
        </div>
    )
};

export default FiveStarRating;
