import Head from "next/head";
import Link from "next/link";
import Layout from '../components/layout';


function HomePage() {
    return (
        <Layout>
            <Head>
                <title>React-Router</title>
            </Head>
            <div>
                <h1>React-Router介紹</h1>
                <p>在React中，Router是一個負責管理將不同的組件呈現到特定路徑的 React庫。</p>
                <p>Router會監聽當前URL並渲染符合該 URL 的組件。</p>
                <p>通過 Router，我們可以將應用程序分成多個頁面或視圖（即“單頁應用程序”）SPA (Single Page Application)。</p>
                <p>因此我們的用戶可以瀏覽我們的應用程序而不必每次都發出新的請求來加載頁面。</p>

                <h2>如果你有打算學習Next.js(我也會這麼推薦你)，那麼你就不必再去學習React-Router了。</h2>
                <p>因為Next.js已經幫我們封裝好了React-Router，所以我們只需要使用Next.js的Router就可以了。</p>

                <a href="">通往Next.js的學習旅程</a>

                


                <h3>下一篇：Router的基本使用</h3>
                <div>
                    <Link href="/RouterBasic">
                        前往Router的基本使用
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default HomePage