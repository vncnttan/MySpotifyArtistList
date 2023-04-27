import Layout from "@component/components/layout/Layout";
import TitleHeader from "@component/components/title/TitleHeader";
import SearchComponent from "@component/components/search/SearchContainer";
import { LanguageContext } from "@component/lib/context/LanguageContext";
import { useContext } from "react";

export default function Search(){
    let lang = useContext(LanguageContext);

    return (
        <Layout title="Search">
            <TitleHeader title={lang.dict.SearchHeader}/>
            <SearchComponent />
        </Layout>
    );
}