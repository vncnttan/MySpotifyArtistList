import style from "./navbar.module.css"
import NavbarBtn from "./Navbar-btn"
import { faHouse, faHeart, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { LanguageContext } from "@component/lib/context/LanguageContext";
import { useContext } from "react"

export default function Navbar(){
    let lang = useContext(LanguageContext);
    return (
    <div id={style.navbar}>
        <NavbarBtn icon={faHouse} tag={lang.dict.HomePageNavbar} link={"/"} />
        <NavbarBtn icon={faHeart} tag={lang.dict.FavoritePageNavbar} link={"/favorites"}/>
        <NavbarBtn icon={faMagnifyingGlass} tag={lang.dict.SearchPageNavbar} link={"/search"}/>
    </div>
    )
}