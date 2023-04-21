import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import style from "./navbar.module.css"
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

interface Props{
    icon ?: IconDefinition;
    tag ?: String;
    link ?: string;
}

export default function NavbarBtn({...props}:Props){
    return (
    <Link className={style.navbarbtn + "  text-center"} href={{ pathname: props.link }}>
        <FontAwesomeIcon icon={props.icon as IconProp} /> <br/>
        <span className="text-center">{props.tag}</span>
    </Link>
    )
}