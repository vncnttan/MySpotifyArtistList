import Image from "next/image"
import style from "./detail.module.css"
import { Key, useRef } from "react"

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
            {props.data.artist.albums.map((album: any, index: Key)=>{
                return <ArtistAlbum key={index} album={album} />
            })}
        </div>
    )
}

interface Album{
    album?: any;
}

export function ArtistAlbum({...props}: Album){
    return (
        <div className={style.albumContainer}>
            <AlbumHeader album={props.album} />
            <AlbumTracks album={props.album}/>
        </div>
    )
}


export function AlbumHeader({...props} : Album){
    return (
        <div style={{display: "block", height: "fit-content", overflow: "auto"}}>
            <Image src={props.album.image} alt={props.album.name + " Album Cover"} width={50} height={50} style={{float: "left", marginBottom: "0.5rem", marginRight: "0.5rem"}}></Image>
            <h1 className={style.albumTitle}>{props.album.name}</h1>    
        </div>
    )
}

export function AlbumTracks({...props} : Album){
    return (
        props.album.tracks.map((track : any, index : Key)=>{
            return <TrackDetail track={track} key={index} index={index} />
        })
    )
}

interface Track{
    track ?: any;
    index ?: Key;
}

export function TrackDetail({...props} : Track){
    return (
        <h2 className={style.trackDetail}>
            {/* <audio className={style.trackPreview} controls src={props.track.preview_url}>
                Your browser does not support the
                <code>audio</code> element.
            </audio> */}
            #{props.index}. {props.track.name}
        </h2>
    )
}