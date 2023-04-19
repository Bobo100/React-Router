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
                <h1>React-Router-V6的Components</h1>
                <p>我們一樣是介紹一些基本的元件(我用官方文件當作分類依據)，像是Router Components又或是Route與其他的React-Router-V6的Components，首先介紹一下前面提到的Router Components。</p>
                <h2>Router Components</h2>
                <p>
                    {`<BrowserRouter>`}：使用HTML5的history API來建立URL和響應用戶請求，主要用於Web應用中。<br />
                    在傳統的 Web 應用程式中，網頁 URL 改變會導致整個頁面重新加載，這樣會導致頁面閃爍，使用體驗差。為了解決這個問題，HTML5 提供了 history API。<br />
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

                <h3>小結論</h3>
                <p>一般來說，我們只會使用BrowserRouter，因為它是最常見的路由方式。</p>
                <p>HashRouter和MemoryRouter則是用於特殊情況，比如說需要支持舊版IE的瀏覽器，或者是需要在Node.js中使用路由。</p>
                <p>NativeRouter則是用於React Native應用。</p>
                <p>StaticRouter則是用於Server-Side Rendering（SSR），通常需要配合Node.js等後端框架一起使用。</p>
                {/* 可以用於在 Node.js 環境下渲染 React Router 的 Web 應用程序。它通常用於 Server-Side Rendering (SSR) 的情境中，以便在服務器端渲染出 HTML 代碼，再傳遞給客戶端進行呈現，提高首屏渲染速度和 SEO。 */}
                <p>另外也不會去使用複合路由，因為它會造成路由的混亂，不易維護。</p>

                <h2>Route Component</h2>
                <p>Route是React Router V6中最重要的組件，它們將URL片段與組件、數據加載和數據突變耦合在一起。通過路由嵌套，複雜的應用程序佈局和數據依賴關係變得簡單和可聲明的。</p>
                <p>{`<Route>`} 則是定義單一路由的元件，它必須放在 {`<Routes>`} 元件內，並且具有 path 和 component 作為其屬性，讓該路徑可與特定的 components 連接在一起。</p>
                <p>在Route中我們有很多的參數和功能可以使用，那這部分在下一篇我們有教學，你可以如何使用，像是如何完成懶加載、如何加上loader(意思是當你的頁面還沒載入完成時，會有一個loading的圖示，讓使用者知道頁面還沒載入完成)...等等。</p>

                <h2>其他Components</h2>
                <h3>Link</h3>
                <p>{`<Link>`} 是一種元素，允許用戶通過單擊或點擊它導航到另一個頁面，並且不需要重新載入整個頁面。但是，它沒有提供關於當前頁面是否是活動狀態或即將激活的任何資訊。在 react-router-dom 中，{`<Link>`} 呈現可訪問的 {`<a>`} 元素，其中包含指向它鏈接到的資源的真實 href。</p>
                <h3>NavLink</h3>
                <p>{`<NavLink>`}是一種特殊類型的{`<Link>`}，它知道自己是否為“活動”或“待定”。這在構建導航菜單時非常有用，例如麵包屑或一組選項卡，你可以顯示哪個當前被選中。它還為輔助技術（如屏幕閱讀器）提供有用的上下文。</p>
                <p>白話的說，NavLink具備了Link的功能，並且可以讓你知道你現在在哪個頁面，並且可以讓你的NavLink有一個active的樣式。</p>

                <h3>Routes</h3>
                <p>可以在應用程式中的任何位置渲染，並適配現有位置下的一組子路由，顯示與之相對應的路由組件。</p>
                <p>舉例來說{`<Routes>`}是一個組件，它可以用於渲染一組{`<Route>`}，並且可以嵌套使用。</p>

                <p>還有很多很多，之後我會再慢慢補上，甚至React-Router有自己的Hooks，可以讓你更方便的使用，那我也會再補上。</p>
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