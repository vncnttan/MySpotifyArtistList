import { useQuery } from "@apollo/client";
import Layout from "@component/components/layout/Layout";
import Title from "@component/components/title/TitleHeader";
import { GET_ARTIST_DETAIL } from "@component/lib/queries/GetArtistDetail";
import { useRouter } from "next/router";
import Link from "next/link";
import ArtistDetail from "@component/components/detail/ArtistDetail";

export default function Detail(){
    const router = useRouter();
    const {artistName} = router.query

    const {loading, error, data} = useQuery(GET_ARTIST_DETAIL, {
        variables: {
            artistName: artistName
        }
    })

    if(loading) return (
        <Layout title="Details">
            <Title title="Detail Page"/>
            <h1 style={{margin: "1rem"}}>Loading...</h1>
        </Layout>
    )
    else if (error) return (
        <Layout title="Details">
            <Title title="Detail Page"/>
            <h1 style={{margin: "1rem"}}>Error: Please Try Again Later ! <br />
            <Link href="/"> <b>Back to home</b> </Link> </h1>
        </Layout>
    )

    return (
    <Layout title="Details">
        <Title title="Detail Page"/>
        <ArtistDetail data={data}/>
    </Layout>
    );
}