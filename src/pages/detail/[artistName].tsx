import { useQuery } from "@apollo/client";
import Layout from "@component/components/layout/Layout";
import Title from "@component/components/title/TitleHeader";
import { GET_ARTIST_DETAIL } from "@component/lib/queries/GetArtistDetail";
import { useRouter } from "next/router";
import Link from "next/link";
import ArtistDetail from "@component/components/detail/ArtistDetail";
import { LanguageContext } from "@component/lib/context/LanguageContext";
import { useContext } from "react"

export default function Detail(){
    let lang = useContext(LanguageContext);
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
            <h1 style={{margin: "1rem"}}>{lang.dict.LoadingPrompt}</h1>
        </Layout>
    )
    else if (error) return (
        <Layout title="Details">
            <Title title="Detail Page"/>
            <h1 style={{margin: "1rem"}}>{lang.dict.ErrorFetching}<br />
            <Link href="/"> <b>{lang.dict.BackHome}</b> </Link> </h1>
        </Layout>
    )

    return (
    <Layout title="Details">
        <Title title={lang.dict.DetailHeader}/>
        <ArtistDetail data={data}/>
    </Layout>
    );
}