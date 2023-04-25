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
    artistName ?: string;
    albumName ?: string;
    songName ?: string;
}

export function ListBox({...props}:Props){
    return (
        <div className={style.listbox}>
            <StockCardContent artistName={props.artistName} />
        </div>
    )
}