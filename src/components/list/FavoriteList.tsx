import { Key, useState } from "react";
import { StockCardContent } from "../card/StockCard"
import style from "./list.module.css"

interface Props {
    FavList ?: string[];
}

export default function FavoriteList(){
    let [FavList, setFavList] = useState(()=>{
        let favlistjson = localStorage.getItem("favlist")
        let localStorageValue;
    
        if(!favlistjson){
            localStorageValue = [{}]
        } else {
            localStorageValue = JSON.parse(favlistjson);
        }
        return localStorageValue;
    })

    return (
        <div>
            {FavList.map((favArtist : string, index : Key)=>{
                <ListBox artistName={favArtist} key={index}/>
            })}
        </div>
    )
}

interface Props {
    artistName ?: string | undefined;
}

export function ListBox({...props}:Props){
    return <div className={style.listbox}>
        <StockCardContent artistName={props.artistName} />
    </div>
}