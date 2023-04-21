import style from "./navbar.module.css"
import NavbarBtn from "./Navbar-btn"
import { faHouse, faHeart, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"


export default function Navbar(){
    return (
    <div id={style.navbar}>
        <NavbarBtn icon={faHouse} tag="List"/>
        <NavbarBtn icon={faHeart} tag="Favorites"/>
        <NavbarBtn icon={faMagnifyingGlass} tag="Search"/>
    </div>
    )
}