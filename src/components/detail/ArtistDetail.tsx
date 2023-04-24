import Image from "next/image"

interface Props {
    data ?: any
}

export default function ArtistDetail({...props} : Props){
    return (
        <div style={{margin: "1rem"}}>
            <ArtistDetailHeader data={props.data}/>
        </div>
    )
}

export function ArtistDetailHeader({...props} : Props){
    return (
        <div style={{margin: "2rem 0"}}>
            <Image src={props.data.artist.image} alt={props.data.artist.name + "'s image."} width={200} height={200} style={{display: "inline", borderRadius: "10rem"}}/>
            <h1 style={{display: "inline", verticalAlign: "bottom", margin: "1rem", fontSize: "3rem", fontWeight: "800"}}> {props.data.artist.name}</h1>
        </div>
    )
}