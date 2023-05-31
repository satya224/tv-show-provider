import React, {FC} from 'react';
import styles from './SearchBar.module.css';
import {Search} from "react-bootstrap-icons";

interface SearchBarProps {
    onSubmit: (value: string) => {}
}

const SearchBar: FC<SearchBarProps> = (props) => {
    const submit = (e: any) => {
        if (e.key === "Enter" && e.target.value.trim() !== "")
            props.onSubmit(e.target.value)
    }

    return (
        <div className={styles.SearchBar}>
            <Search size={27} className={styles.icon}/>
            <input
                onKeyUp={submit}
                className={styles.input}
                type={"text"}
                placeholder={"Search a tv show you may like"}/>
        </div>
    )
};

export default SearchBar;
