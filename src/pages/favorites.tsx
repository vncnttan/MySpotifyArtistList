import Layout from "@component/components/layout/Layout";
import TitleHeader from "@component/components/title/TitleHeader";
import FavoriteList from "@component/components/list/FavoriteList";
import { LanguageContext } from "@component/lib/context/LanguageContext";
import { useContext } from "react"

export default function Favorites(){
    let lang = useContext(LanguageContext);

    return (
    <Layout title="Favorites">
        <TitleHeader title={lang.dict["FavoriteHeader"]} />
        <FavoriteList/>
    </Layout>
    );
}