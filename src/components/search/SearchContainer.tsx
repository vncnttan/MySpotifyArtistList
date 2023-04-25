import style from "./search.module.css"
import { ListBox } from "../list/FavoriteList"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ChangeEvent, FormEvent, useState } from "react"
import { GET_ARTIST_DETAIL } from "@component/lib/queries/GetArtistDetail"
import { useQuery } from "@apollo/client"


export default function SearchComponent(){
    const [searchInput, setSearchInput] = useState("");
    
    const handleChange = (e : ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        setSearchInput(e.target.value);
    }

    const {loading, error, data} = useQuery(GET_ARTIST_DETAIL, {
        variables: {
            artistName: searchInput
        }
    })

    return (
        <div style={{margin: "0 1rem"}}>
            <FontAwesomeIcon icon={faSearch} style={{
                // padding: "0.7rem", 
                margin: "0 1rem",
                // backgroundColor: "var(--secondary-gray)",
                // borderRadius: "0.5rem",
                // verticalAlign: "baseline"
                }}/>
            <input className={style.searchbar} type="text" placeholder="Search ..." onChange={handleChange} value={searchInput}/>
            <h1 style={{marginTop: "3rem"}}>Top Matching Artist: </h1>
            <ListBox artistName={data.artists.name} />
        </div>  
    )
}
