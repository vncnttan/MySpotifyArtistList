import { ReactNode } from "react";
import Head from "next/head";

interface Props {
    title ?: string;
    children ?: ReactNode;
}

export default function Layout({...props}:Props){
    return (
        <div>
            <Head>
                <title>{props.title}</title>
            </Head>
            <div>{props.children}</div>
        </div>
    )
}