import React, {FC} from 'react';
import styles from './Logo.module.css';

interface LogoProps {
    img: string,
    title: string,
    subtitle: string

}

const Logo: FC<LogoProps> = (props) => (
    <div className={styles.Logo}>
        <div className={styles.container}>
            <img className={styles.img} src={props.img} alt={""}/>
            <div className={styles.title}>{props.title}</div>
        </div>
        <div className={styles.subtitle}>{props.subtitle}</div>
    </div>
);

export default Logo;
