import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import style from "./navbar.module.css"

interface Props{
    icon ?: IconDefinition;
    tag ?: String;
}

export default function NavbarBtn({...props}:Props){
    return (
    <div className={style.navbarbtn + "  text-center"}>
        <FontAwesomeIcon icon={props.icon as IconProp} /> <br/>
        <span className="text-center">{props.tag}</span>
    </div>
    )
}