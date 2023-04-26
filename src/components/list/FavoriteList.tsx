import { Key, useEffect, useState } from "react";
import { StockCardContent } from "../card/StockCard"
import style from "./list.module.css"

interface Props {
    FavList ?: string[];
}

export default function FavoriteList(){
    let [FavList, setFavList] = useState(Array<string>);
    
    useEffect(()=>{
        let favlistjson = localStorage.getItem("favlist")
        if(!favlistjson){
            setFavList([]);
        } else {
            setFavList(JSON.parse(favlistjson));
        }
    }, []);

    if(typeof FavList === 'undefined'){
        return <div></div>
    }

    return (
        <div>
            {FavList.map((favArtist : string, index : Key)=>{
                return <ListBox artistName={favArtist} key={index}/>
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