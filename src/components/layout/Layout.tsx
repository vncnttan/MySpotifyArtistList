import { ReactNode } from "react";
import Head from "next/head";
import style from "./layout.module.css"

interface Props {
    title ?: string;
    children ?: ReactNode;
}

export default function Layout({...props}:Props){
    return (
        <div className={style.container}>
            <Head>
                <title>{"investNJoy | " + props.title}</title>
            </Head>
            <div>{props.children}</div>
        </div>
    )
}