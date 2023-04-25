import { Key, useState } from "react";
import { StockCardContent } from "../card/StockCard"
import style from "./list.module.css"

interface Props {
    FavList ?: string[];
}

export default function FavoriteList({...props}: Props){
    if(props.FavList != undefined){

        return (
            <div>
                {props.FavList.map((favArtist : string, index : Key)=>{
                    return <ListBox artistName={favArtist} key={index}/>
                })}
            </div>
        )
    } else {
        return
    }
}

interface Props {
    artistName ?: string | undefined;
}

export function ListBox({...props}:Props){
    return <div className={style.listbox}>
        <StockCardContent artistName={props.artistName} />
    </div>
}