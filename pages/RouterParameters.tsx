import Head from "next/head";
import Link from "next/link";
import Layout from '../components/layout';


function HomePage() {
    return (
        <Layout>
            <Head>
                <title>RouterParameters</title>
            </Head>
            <div className="flex flex-column">
                <h1>React-Router-V6的參數</h1>
                <p>首先介紹一下前面提到的Router的參數。</p>
                <p>
                    {`<BrowserRouter>`}：使用HTML5的history API來建立URL和響應用戶請求，主要用於Web應用中。<br/>
                    在傳統的 Web 應用程式中，網頁 URL 改變會導致整個頁面重新加載，這樣會導致頁面閃爍，使用體驗差。為了解決這個問題，HTML5 提供了 history API。<br/>
                    history API 是一組 JavaScript 方法，讓開發者可以在不重新加載整個頁面的情況下，改變網頁的 URL。這樣可以實現在同一個頁面上顯示不同的內容，從而提升使用體驗。
                </p>
                <p>
                    {`<HashRouter>：使用URL上的hash來建立路徑，主要用於不支持HTML5 history API的瀏覽器（如舊版IE）或靜態網頁。`}
                </p>
                <p>
                    {`<MemoryRouter>：把所有路由資訊保存在Memory中，並不會真正改變URL，主要用於測試或開發階段。`}
                </p>
                <p>
                    {`<NativeRouter>：提供了對於React Native應用的路由支持，和<BrowserRouter>用法類似。`}
                </p>
                <p>
                    {`<StaticRouter>：用於Server-Side Rendering（SSR），通常需要配合Node.js等後端框架一起使用。`}
                </p>

                <h2>結論</h2>
                <p>一般來說，我們只會使用BrowserRouter，因為它是最常見的路由方式。</p>
                <p>HashRouter和MemoryRouter則是用於特殊情況，比如說需要支持舊版IE的瀏覽器，或者是需要在Node.js中使用路由。</p>
                <p>NativeRouter則是用於React Native應用。</p>
                <p>StaticRouter則是用於Server-Side Rendering（SSR），通常需要配合Node.js等後端框架一起使用。</p>

                <p>另外也不會去使用複合路由，因為它會造成路由的混亂，不易維護。</p>
            </div>

            <h3>下一篇：動態Router</h3>
            <div className="link_container">
                <Link href="/RouterBasic">
                    回到上一篇RouterBasic
                </Link>
                <Link href="/RouterDynamic">
                    前往Router動態
                </Link>
            </div>
        </Layout>
    )
}

export default HomePage