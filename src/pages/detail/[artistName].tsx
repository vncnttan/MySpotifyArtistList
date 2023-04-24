import { useQuery } from "@apollo/client";
import Layout from "@component/components/layout/Layout";
import Title from "@component/components/title/TitleHeader";
import { GET_ARTIST_DETAIL } from "@component/lib/queries/GetArtistDetail";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Detail(){
    const router = useRouter();
    const {artistName} = router.query

    const {loading, error, data} = useQuery(GET_ARTIST_DETAIL, {
        variables: {
            artistName: artistName
        }
    })
    console.log(artistName);
    if(loading) return (
        <Layout title="Details">
            <Title title="Detail Page"/>
            <h1>Loading...</h1>
        </Layout>
    )
    else if (error) return (
        <Layout title="Details">
            <Title title="Detail Page"/>
            <h1>Error: Please Try Again Later !</h1>
            <Link href="/">Back to home</Link>
        </Layout>
    )

    return (
    <Layout title="Details">
        <Title title="Detail Page"/>
        <h1>Artist: {data.artist.name}</h1>
    </Layout>
    );
}