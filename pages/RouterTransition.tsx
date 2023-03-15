import Head from "next/head";
import Link from "next/link";
import Layout from '../components/layout';


function HomePage() {
    return (
        <Layout>
            <Head>
                <title>RouterTransition</title>
            </Head>
            <div>
                <h1>RouterTransition介紹</h1>
            </div>

            <h3></h3>
            <div>
                <Link href="/RouterDynamic">
                    回到上一篇RouterDynamic
                </Link>
            </div>
        </Layout>
    )
}

export default HomePage