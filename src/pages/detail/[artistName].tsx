import Layout from "@component/components/layout/Layout";
import Title from "@component/components/title/TitleHeader";
import { useRouter } from "next/router";

export default function Detail(){
    const router = useRouter();
    const {artistName} = router.query
    
    return (
    <Layout title="Details">
        <Title title="Detail Page"/>
        <h1>Artist: {artistName}</h1>
    </Layout>
    );
}