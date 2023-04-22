import style from "./search.module.css"
import { ListBox } from "../list/FavoriteList"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ChangeEvent } from "react"

const handleChange = (e : ChangeEvent)=>{
    e.preventDefault();
}

export default function SearchBar(){
    return (
        <div style={{margin: "0 1rem"}}>
            <FontAwesomeIcon icon={faSearch} style={{
                // padding: "0.7rem", 
                margin: "0 1rem",
                // backgroundColor: "var(--secondary-gray)",
                // borderRadius: "0.5rem",
                // verticalAlign: "baseline"
                }}/>
            <input className={style.searchbar} type="text" placeholder="Search ..." onChange={handleChange}/>
        </div>  
    )
}

export function SearchResult(){
    return (
        <div>
            <ListBox />
            <ListBox />
            <ListBox />
            <ListBox />
        </div>
    )
}