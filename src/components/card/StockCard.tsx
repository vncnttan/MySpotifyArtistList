import style from "./card.module.css"

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
        </div>
    )
}

export function StockCardContent(){
    return (
        <div className={style.cardcontent}>
            <h1>dummy</h1> <br />
            <h1></h1>
        </div>
    )
}

export function FavoriteButton(){
    return (
        <div>
            Click Here
        </div>
    )
}