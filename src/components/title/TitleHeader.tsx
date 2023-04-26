import style from "./title.module.css"

interface Props{
    title ?: string
}

export default function TitleHeader({...props}:Props){
    return <h1 className={style.title}>{props.title}</h1>
}