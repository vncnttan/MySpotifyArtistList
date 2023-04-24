import { StockCardContent } from "../card/StockCard"
import style from "./list.module.css"

export default function FavoriteList(){
    return (
        <div>
            <ListBox/>
            <ListBox/>
            <ListBox/>
            <ListBox/>
            <ListBox/>
        </div>
    )
}

export function ListBox(){
    return (
        <div className={style.listbox}>
            <StockCardContent artistName={""} />
        </div>
    )
}