import Layout from "@component/components/layout/Layout";
import TitleHeader from "@component/components/title/TitleHeader";
import SearchComponent from "@component/components/search/SearchContainer";

export default function Search(){
    return (
        <Layout title="Search">
            <TitleHeader title="Search Page"/>
            <SearchComponent />
        </Layout>
    );
}