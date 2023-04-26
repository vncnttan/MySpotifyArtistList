import style from "./card.module.css"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { MouseEventHandler, useEffect, useState } from "react"

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
    artistName ?: string,
    onfavchange ?: () => void;
}

export function StockCardContent({...props}:Props){
    return (
        <Link href={"/detail/" + props.artistName + "/"}>
            <div className={style.cardcontent}>
                <h1 className={style.stockname}> {props.artistName} </h1>
                <h1 className={style.stockpercentage}><FavoriteButton artistName={props.artistName} onfavchange={props.onfavchange}/> </h1>
            </div>
        </Link>
    )
}

export function FavoriteButton({...props}:Props){
    const [isFav, setIsFav]  = useState(Boolean);
    
    useEffect(() => {
        let favlistjson = localStorage.getItem("favlist")
        if(!favlistjson){
            console.log(props.artistName + " no favlistjson");
            setIsFav(false);
        } else {
            let localStorageValue = JSON.parse(favlistjson);
            if(localStorageValue.includes(props.artistName)){
                console.log(props.artistName + " included");
                setIsFav(true);
            } else {
                console.log(props.artistName + " doesnt included");
                setIsFav(false);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    // if(favlist && favlist.includes(props.artistName)){
    //     isFav = false;
    // }
    
    let handleClick = (e : any)=>{
        e.preventDefault();
        if(!isFav){
            setIsFav(true);
            if(typeof window !== 'undefined'){
                let favlistjson = localStorage.getItem("favlist")
                let localStorageValue
                if(!favlistjson){
                    localStorageValue = []
                } else {
                    localStorageValue = JSON.parse(favlistjson);
                }
                localStorageValue = [...localStorageValue, props.artistName]
                localStorage.setItem("favlist", JSON.stringify(localStorageValue));
            }
        } else {
            if(props.artistName){
                if(typeof window !== 'undefined'){
                    let favlistjson = localStorage.getItem("favlist");

                    let localStorageValue;
                    if(!favlistjson){
                        localStorageValue = []
                    } else {
                        localStorageValue = JSON.parse(favlistjson);
                    }
                    localStorageValue = localStorageValue.filter((e: string | undefined) => e !== props.artistName)

                    localStorage.setItem("favlist", JSON.stringify(localStorageValue));
                    setIsFav(false);
                }
            }
        }
    }

    return (
        <FontAwesomeIcon onClick={handleClick} style={isFav ? {color: "yellow"} : {color: "white"}} icon={faStar}/>
    )
}