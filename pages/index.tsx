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

                <p>SPA (Single Page Application) 的意思是「單頁面應用程式」，它的特點就是所有的頁面內容都是通過動態載入實現的，不需要重新載入整個頁面。
                    因此，使用SPA的網站在切換頁面時不會導致整個頁面的重新載入，也不會產生<span>閃爍的效果</span>，能夠提供更好的用戶體驗。
                    相反，如果是傳統的多頁面應用程式，在每次切換頁面時都需要重新載入整個頁面，這樣會導致較差的用戶體驗，也會增加伺服器負擔。</p>

                <h2>如果你有打算學習Next.js(我也會這麼推薦你)，那麼你就不必再去學習React-Router了。</h2>
                <p>因為Next.js已經幫我們封裝好了React-Router，所以我們只需要使用Next.js的Router就可以了。</p>

                <a href="https://react-next-js-introduce.vercel.app/">通往Next.js的學習旅程</a>


                <p>如果你還是想要學習React-Router，那麼我們就繼續往下看。</p>
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