import Head from "next/head";
import Link from "next/link";
import Layout from '../components/layout';
import React from 'react';
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

function HomePage() {
    return (
        <Layout>
            <Head>
                <title>RouterBasic</title>
            </Head>
            <div>
                <h1>Router的基本語法</h1>
                <p>這邊，我們將介紹Router的基本語法，並且使用Router來實現SPA。</p>

                <h3>注意，我們這邊使用的是React-Router-V6，而不是React-Router-V5。</h3>

                <p>首先，我們需要安裝React-Router-V6。</p>
                <p>在終端機輸入以下指令：</p>
                <Prism language="typescript" style={vscDarkPlus}>
                    {`npm i react-router-dom`}
                </Prism>
                <p>即可安裝React-Router-V6。</p>

                <p>接著，我們需要在src\App.tsx中引入React-Router-V6。</p>
                <p>在src\App.tsx中，我們需要引入以下內容：</p>

                <Prism language="typescript" style={vscDarkPlus}>
                    {`import {BrowserRouter as Router, Routes, Route} from "react-router-dom";`}
                </Prism>

                <p>BrowserRouter：是react-router-dom提供的一個容器，用來封裝應用程序要使用的所有路由器。它使用HTML5的history API來保持UI和URL的同步。</p>
                <p>那v6版本中還有其他的Router嗎？</p>
                <p>答案是有的，v6版本中還有HashRouter、MemoryRouter、NativeRouter、StaticRouter等等。</p>
                <p>這些Router的用法和BrowserRouter是一樣的，只是BrowserRouter是使用HTML5的history API來保持UI和URL的同步，而其他的Router則是使用不同的方式來保持UI和URL的同步。</p>
                <p>下一篇的時候，我們會介紹其他的Router。</p>

                <p>Routes：是react-router-dom提供的一個元件，用來定義應用程式的路由規則。在Routes中可以設定多個Route元件，每個Route都能夠對應到特定的路徑規則。</p>
                <p>Route：是react-router-dom提供的一個元件，在路由定義中配對到指定路徑時，會渲染Route內部所產生的組件。這些組件通常是一些自定義的頁面或介面。Route內部還可以配置其他選項，例如：確認權限、重定向等。</p>

                <p>目前，你只需要看過就好，之後會有更詳細的介紹。</p>

                <p>接著，我們需要在src\App.tsx中使用Router。</p>
                <p>在src\App.tsx中，我們需要使用以下內容：</p>

                <Prism language="typescript" style={vscDarkPlus}>
                    {`<Router basename="/React-Router-Example-01">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RouterBasic" element={<RouterBasic />} />
        <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
</Router>`}
                </Prism>

                <h2>BrowserRouter</h2>
                <p>basename：是react-router-dom提供的一個屬性，用來設定Router的基本路徑。</p>
                <p>像我們這邊設定了basename="/React-Router-Example-01"，所以我們的Router的基本路徑就是：https://localhost:3000/React-Router-Example-01。</p>
                <p>之後的路徑就會在這個基本路徑之後。</p>
                <p>例如：https://localhost:3000/React-Router-Example-01/RouterBasic。</p>
                <h2>Routes</h2>
                <p>Routes：是react-router-dom提供的一個元件，用來定義應用程式的路由規則。在Routes中可以設定多個Route元件，每個Route都能夠對應到特定的路徑規則。</p>
                <h2>Route</h2>
                <p>Route：是react-router-dom提供的一個元件，在路由定義中配對到指定路徑時，會渲染Route內部所產生的組件。這些組件通常是一些自定義的頁面或介面。Route內部還可以配置其他選項，例如：確認權限、重定向等。</p>
                <p>我們這邊就有三個Route，分別是：</p>

                <Prism language="typescript" style={vscDarkPlus}>
                    {`<Route path="/" element={<Home />} />
<Route path="/RouterBasic" element={<RouterBasic />} />
<Route path="*" element={<NotFoundPage />}></Route>`}
                </Prism>

                <p>第一行：path="/"，代表的是首頁，也就是https://localhost:3000/React-Router-Example-01。</p>
                <p>第二行：path="/RouterBasic"，代表的是https://localhost:3000/React-Router-Example-01/RouterBasic。</p>
                <p>第三行：path="*"，代表的是所有沒有定義的路徑，也就是俗稱的404頁面。，也就是https://localhost:3000/React-Router-Example-01/NotFoundPage。</p>

                <p>他們會分別用Home、RouterBasic、NotFoundPage來渲染。</p>

                <h3>下面我們提供一個簡單完整的範例：</h3>

                <Prism language="typescript" style={vscDarkPlus}>
                    {`// 路徑是 src/App.tsx
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
  
import { Home } from './pages/Home';
import { NotFoundPage } from './pages/Error';
  
function App() {
    return (
        <div className="App">
            <Router basename="/React-Router-Example-01">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFoundPage />}></Route>
                </Routes>
            </Router>
        </div>
    );
}
  
export default App;
  `}
                </Prism>

                <p>並且創立對應的Home元件</p>

                <Prism language="typescript" style={vscDarkPlus}>
                    {`// 路徑是 src/pages/Home.tsx
export const Home = () => {
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}
`}
                </Prism>

                <p>創立對應的NotFoundPage元件</p>

                <Prism language="typescript" style={vscDarkPlus}>
                    {`// 路徑是 src/pages/Error.tsx
export const NotFoundPage = () => {
    return (
        <div>
            <h1>404</h1>
            <h2>Page Not Found</h2>
        </div>
    )
}
`}
                </Prism>

                <p>完成上述的程式碼後，我們就可以在瀏覽器中看到Home頁面了。而且當你到其他沒有定義的路徑時，也會顯示404頁面。</p>
            </div>


            <h3>下一篇：Router參數</h3>
            <div className="link_container">
                <Link href="/">
                    回到上一篇
                </Link>
                <Link href="/RouterParameters">
                    前往Router參數
                </Link>
            </div>
        </Layout>
    )
}

export default HomePage