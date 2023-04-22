import Layout from "@component/components/layout/Layout";
import TitleHeader from "@component/components/title/TitleHeader";
import SearchBar, { SearchResult } from "@component/components/search/SearchBar";

export default function Search(){
    return (
        <Layout title="Search">
            <TitleHeader title="Search Page"/>
            <SearchBar />
            <SearchResult />
        </Layout>
    );
}