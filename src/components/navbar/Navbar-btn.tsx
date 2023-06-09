import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import style from "./navbar.module.css"
import Link from "next/link";
import { useRouter } from "next/router";

interface Props{
    icon ?: IconDefinition;
    tag ?: string;
    link ?: string;
}

export default function NavbarBtn({...props}:Props){
    const router = useRouter();
    return (
    <Link className={
            style.navbarbtn + "  text-center " + 
            (router.pathname == (props.link) ? style.active : "")} 
        href={{ pathname: props.link }} >

        <FontAwesomeIcon icon={props.icon as IconProp} /> <br/>
        <span className="text-center">{props.tag}</span>

    </Link>
    )
}