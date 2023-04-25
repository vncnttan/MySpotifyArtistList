import Layout from "@component/components/layout/Layout";
import TitleHeader from "@component/components/title/TitleHeader";
import FavoriteList from "@component/components/list/FavoriteList";

export default function Favorites(){
    return (
    <Layout title="Favorites">
        <TitleHeader title="Favorite Page" />
        <FavoriteList FavList={}/>
    </Layout>
    );
}