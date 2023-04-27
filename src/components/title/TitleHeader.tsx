import { useContext } from "react";
import style from "./title.module.css"
import { LanguageContext } from "@component/lib/context/LanguageContext";
import Image from "next/image";

interface Props{
    title ?: string
}

export default function TitleHeader({...props}:Props){
    let lang = useContext(LanguageContext);

    return (
        <div>
            <h1 className={style.title}>{props.title}</h1>
            <button className={style.langbtn} type="submit" onClick={lang.changeLang}> <Image alt="flg" src={lang.dict.Flag} width={15} height={15} style={{display: "inline", verticalAlign: "baseline"}}></Image> {lang.userLang}</button>
        </div>
    )
}