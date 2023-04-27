import style from "./search.module.css"
import { ListBox } from "../list/FavoriteList"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ChangeEvent, useContext, useState } from "react"
import { GET_ARTIST_DETAIL } from "@component/lib/queries/GetArtistDetail"
import { useQuery } from "@apollo/client"
import { LanguageContext } from "@component/lib/context/LanguageContext"


export default function SearchComponent(){
    let lang = useContext(LanguageContext);

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

    const SearchResult = ()=>{
        if(searchInput.length <= 0){
            return <h1>{lang.dict.FieldEmpty}</h1>
        }
        if (loading) {
            return <h1>{lang.dict.LoadingPrompt}</h1>
        } else if (error){
            return <h1>{lang.dict.LoadingPrompt}</h1>
        } else {
            return <ListBox artistName={data.artist.name} />
        }
    }

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
            <h1 style={{marginTop: "3rem"}}>{lang.dict.TopMatchingArtistHeader}</h1>
            <SearchResult />
        </div>  
    )
}
