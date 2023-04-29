import { Key, useEffect, useState } from "react";
import { StockCardContent } from "../card/StockCard"
import style from "./list.module.css"

interface Props {
    FavList ?: string[];
}

export default function FavoriteList(){
    let [FavList, setFavList] = useState(Array<string>);
    
    const onFavChange = ()=>{
        let favlistjson = localStorage.getItem("favlist")
        if(!favlistjson){
            setFavList([])
        } else {
            setFavList(JSON.parse(favlistjson));
        }
    }
    
    useEffect(()=>{
        onFavChange()
    }, []);

    if(typeof FavList === 'undefined'){
        return <div></div>
    }
    
    if(FavList.length == 0){
        return <div>No Favorites yet!</div>
    }

    return (
        <div>
            {FavList.map((favArtist : string, index : Key)=>{
                return <ListBox artistName={favArtist} key={index} onfavchange={onFavChange}/>
            })}
        </div>
    )
}

interface Props {
    artistName ?: string | undefined;
    onfavchange ?: () => void;
}

export function ListBox({...props}:Props){
    return <div className={style.listbox}>
        <StockCardContent artistName={props.artistName} onfavchange={props.onfavchange}/>
    </div>
}