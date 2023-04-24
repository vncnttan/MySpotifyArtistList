import Image from "next/image"
import style from "./detail.module.css"

interface Props {
    data ?: any
}

export default function ArtistDetail({...props} : Props){
    return (
        <div style={{margin: "1rem"}}>
            <ArtistDetailHeader data={props.data}/>
            <ArtistDiscography data={props.data} />
        </div>
    )
}

export function ArtistDetailHeader({...props} : Props){
    return (
        <div className={style.container}>
            <Image src={props.data.artist.image} alt={props.data.artist.name + "'s image."} width={150} height={150} className={style.artistImage}/>
            <h1 className={style.artistNameHeader}> {props.data.artist.name}</h1>
        </div>
    )
}

export function ArtistDiscography({...props} : Props){
    return (
        <div className={style.container}>
            <h1>Discography</h1>
            <hr />
        </div>
    )
}