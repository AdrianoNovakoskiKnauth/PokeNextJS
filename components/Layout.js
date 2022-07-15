import Footer from "./Footer"
import NavBar from "./NavBar"
import Head from 'next/head'

export default function Layout({children}){
    return (
        <>
            <Head>
                <link rel='shortcurt icon' Href='/images/favicon.ico' />
                <title>PokeNext</title>
            </Head>
            <NavBar />
            <main className="main-contairer">{children}</main>
            <Footer />
        </>
    )
}