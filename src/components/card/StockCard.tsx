import style from "./card.module.css"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function StockCard(){
    let artists = [
        "The Weeknd",
        "Ed Sheeran",
        "Taylor Swift",
        "Justin Bieber",
        "Sam Smith",
        "Ariana Grande",
        "David Guetta",
        "Drake",
        "Rihanna",
        "Bad Bunny",
        "Harry Styles",
        "Coldplay",
        "Eminem",
        "Shakira",
        "Dua Lipa",
        "SZA"
    ]
    
    return (
        <div className={style.cardcontainer}>
            {artists.map((artist, index) => {
                return <StockCardContent key={index} artistName={artist} />
            })}
        </div>
    )
}

interface Props{
    artistName ?: String,
}

export function StockCardContent({...props}:Props){
    return (
        <Link href={"/detail/" + props.artistName + "/"}>
            <div className={style.cardcontent}>
                <h1 className={style.stockname}> {props.artistName} </h1>
                <h1 className={style.stockpercentage}><FavoriteButton /> </h1>
            </div>
        </Link>
    )
}

export function FavoriteButton(){
    return (
        <FontAwesomeIcon style={{color: "yellow"}} icon={faStar}/>
    )
}