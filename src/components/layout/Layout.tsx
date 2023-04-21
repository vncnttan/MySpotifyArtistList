import { ReactNode } from "react";
import Head from "next/head";
import style from "./layout.module.css"
import Navbar from "../navbar/Navbar";

interface Props {
    title ?: string;
    children ?: ReactNode;
}

export default function Layout({...props}:Props){
    return (
        <>
        <div >
            <Head>
                <title>{"investNJoy | " + props.title}</title>
            </Head>
            <div className={style.container}>{props.children}</div>
        </div>
        <Navbar/>
        </>
    );
}