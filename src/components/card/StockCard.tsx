import style from "./card.module.css"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function StockCard(){
    return (
        <div className={style.cardcontainer}>
            <StockCardContent/>
            <StockCardContent/>
            <StockCardContent/>
            <StockCardContent/>
            <StockCardContent/>
            <StockCardContent/>
            <StockCardContent/>
            <StockCardContent/>
            <StockCardContent/>
        </div>
    )
}

export function StockCardContent(){
    return (
        <div className={style.cardcontent}>
            <h1 className={style.stockname}>BBCA <FavoriteButton /> </h1>
            <h1 className={style.stockpercentage}>50%</h1>
        </div>
    )
}

export function FavoriteButton(){
    return (
        <FontAwesomeIcon icon={faStar}/>
    )
}