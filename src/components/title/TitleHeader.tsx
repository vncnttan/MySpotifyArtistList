import style from "./title.module.css"

interface Props{
    title ?: String
}

export default function TitleHeader({...props}:Props){
    return <h1 className={style.title}>{props.title}</h1>
}