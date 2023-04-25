import { StockCardContent } from "../card/StockCard"
import style from "./list.module.css"

export default function FavoriteList(){
    return (
        <div>
            <ListBox artistName=""/>
        </div>
    )
}

interface Props {
    artistName ?: string | undefined;
    albumName ?: string | undefined;
    songName ?: string | undefined;
}

export function ListBox({...props}:Props){
    if(props.albumName){
        return (
            <div className={style.listbox}>
                <StockCardContent artistName={props.artistName} />
            </div>
        )
    }  else { 
        return (
            <div className={style.listbox}>
                <StockCardContent artistName={props.artistName} />
            </div>
        )
    }
}