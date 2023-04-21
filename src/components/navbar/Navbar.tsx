import style from "./navbar.module.css"
import NavbarBtn from "./Navbar-btn"
import { faHouse, faHeart, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

export default function Navbar(){
    return (
    <div id={style.navbar}>
        <NavbarBtn icon={faHouse} tag="List" link={"/"}/>
        <NavbarBtn icon={faHeart} tag="Favorites" link={"/favorites"}/>
        <NavbarBtn icon={faMagnifyingGlass} tag="Search" link={"/search"}/>
    </div>
    )
}