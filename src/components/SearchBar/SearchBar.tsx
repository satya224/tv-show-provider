import React, {FC, useState} from 'react';
import styles from './SearchBar.module.css';
import {Search} from "react-bootstrap-icons";

interface SearchBarProps {
    onSubmit: (value: string) => {}
    onSearch: (value: string) => {}
}

const SearchBar: FC<SearchBarProps> = (props) => {
    const [searchText, setSearchText] = useState("");
    const submit = (e: any) => {
        if (e.key === "Enter" && e.target.value.trim() !== "") {
            props.onSubmit(e.target.value)
            setSearchText("")
        }
        if (e.target.value.trim() !== "") {
            props.onSearch(e.target.value)
        }
    }

    const handleOnChange = (e: any) => {
        setSearchText(e.target.value)
    }

    const search = () => {
        if (searchText.trim() !== "") {
            props.onSubmit(searchText)
            setSearchText("")
        }
    }

    return (
        <div className={styles.SearchBar}>
            <Search size={27} className={styles.icon} onClick={search}/>
            <input
                onKeyUp={submit}
                value={searchText}
                onChange={handleOnChange}
                className={styles.input}
                type={"text"}
                placeholder={"Search a tv show you may like"}/>
        </div>
    )
};

export default SearchBar;
