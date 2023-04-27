import { useContext } from "react";
import style from "./title.module.css"
import { LanguageContext } from "@component/lib/context/LanguageContext";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props{
    title ?: string
}

export default function TitleHeader({...props}:Props){
    let lang = useContext(LanguageContext);
    let router = useRouter();

    let allLogoRoute = ["/", "/favorites", "/search"]

    return (
        <div>
            <h1 className={style.title}><Image src="./logo.svg" alt="logo" width={20} height={20} style={{display: allLogoRoute.includes(router.pathname) ? "inline" : "none", margin: "0 0.5rem", verticalAlign: "baseline"}} ></Image>{props.title}</h1>
            <button className={style.langbtn} type="submit" onClick={lang.changeLang}> <Image alt="flg" src={lang.dict.Flag} width={15} height={15} style={{display: "inline", verticalAlign: "baseline"}}></Image> {lang.userLang}</button>
        </div>
    )
}