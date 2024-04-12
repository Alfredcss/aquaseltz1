import Head from 'next/head';

export default function Header() {
    return (
        <Head>
            {/* Agrega tu favicon */}
            <link rel="icon" type="img/logo.png" href="img/logo.png" />
            <title>Aqua Seltz</title>
        </Head>
    );
}
