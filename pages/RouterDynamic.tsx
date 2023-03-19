import Head from "next/head";
import Link from "next/link";
import Layout from '../components/layout';
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';


function HomePage() {
    return (
        <Layout>
            <Head>
                <title>RouterDynamic</title>
            </Head>
            <div className="flex flex-column">
                <h1>動態Router介紹</h1>
                <p>我們將介紹React Router v6中的動態路由配置，以及動態路由載入以及動態URL參數。</p>

                <h2>動態路由載入(又俗稱懶加載)</h2>
                <p>React Router v6 提供了 lazy 和 Suspense 組件來實現動態路由載入，也就是俗稱的懶加載。</p>

                <Prism language="typescript" style={vscDarkPlus}>
                    {`import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));
const Contact = React.lazy(() => import('./Contact'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<React.Suspense fallback={<div>Loading...</div>}><About /></React.Suspense>} />
        <Route path="/contact" element={<React.Suspense fallback={<div>Loading...</div>}><Contact /></React.Suspense>} />
      </Routes>
    </BrowserRouter>
  );
}`}
                </Prism>

                <p>在上面的代碼中，我們使用了 {` <React.Suspense> `}組件來包裹動態載入的組件，並且使用了 {` <React.lazy> `}來進行動態載入。<br />
                    這樣就可以在需要的時候才去載入組件，而不是一開始就載入所有的組件。</p>
                <a href="https://react-router-example-01.vercel.app/">觀看範例</a>
                <a href="https://github.com/Bobo100/React-Router-Example-01">前往看範例的程式碼</a>

                <h2>動態路由配置</h2>
                <p>動態路由配置是一種更簡單的動態路由載入方式，它可以讓我們在不修改代碼的情況下，動態的添加或者刪除路由。<br />
                    這樣就可以在不修改代碼的情況下，動態的添加或者刪除路由。</p>
                <p>比如說，在你的應用程序中，你可能會有一個基於數據庫中的內容動態生成路由的需求，這時候你可以編寫代碼來動態生成路由配置，而不是手動在代碼中添加或刪除路由。</p>
                <h3>動態路由配置的實現</h3>

                <Prism language="typescript" style={vscDarkPlus}>
                    {`//routes.tsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFoundPage } from './pages/Error';
import { About } from './pages/About';

const routes = [
    {
        path: '/',
        element: <Home />,
        title: 'Home'
    },
    {
        path: '/about',
        element: <React.Suspense fallback={<div>Loading...</div>}><About /></React.Suspense>,
        title: 'About'

    }
];

export const defaultRoutePath = '/';
export const fallbackRoutePath = '/404';

export function getPageTitle(pathname: string) {
    const route = routes.find((route) => route.path === pathname);
    return route ? route.title : 'My App';
}

export function getRoutes() {
    return (
        <React.Fragment>
            {routes.map((route) => (
                <Route path={route.path} element={route.element} />
            ))}
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
        </React.Fragment>
    );
}`}
                </Prism>

                <Prism language="typescript" style={vscDarkPlus}>
                    {`//App.tsx
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { getRoutes } from './routes';

function App() {
  return (
    <div className='App'>
      <Router basename="/">
        <Routes>
          {getRoutes()}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
`}
                </Prism>

                <p>我們把React-Router V6 中的路由配置抽取出來，放在了 {` getRoutes() `}函數中，然後在 {` App.tsx `}中引入 {` getRoutes() `}函數，並且在 {` <Routes> `}組件中使用 {` getRoutes() `}函數。</p>
                <p>並且我們還寫了一個 {` getPageTitle() `}函數，用來獲取當前路由的標題，這樣我們就可以在 {` <title> `}標籤中使用當前路由的標題。</p>
                <p>例如在Home.tsx中，我們可以這樣寫：</p>

                <Prism language="typescript" style={vscDarkPlus}>
                    {`import { useLocation } from "react-router-dom";
import { getPageTitle } from "../routes";
export const Home = () => {
    const location = useLocation();
    const pageTitle = getPageTitle(location.pathname);

    return (
        <div>
            <h1>{pageTitle}</h1>
        </div>
    );
};
`}
                </Prism>

                <a href="https://react-router-example-02.vercel.app/">觀看範例</a>
                <a href="https://github.com/Bobo100/React-Router-Example-02">前往看範例的程式碼</a>

                <h2>動態URL參數</h2>
                <p>動態URL參數是一種可以在路由中使用參數的方式，這樣就可以在路由中使用參數，並且可以通過參數來進行不同的操作。</p>
                <p>作法很簡單就是當你使用了：開頭，就會變成動態參數，下面有個範例</p>

                <Prism language="typescript" style={vscDarkPlus}>
                    {`import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <React.Suspense fallback={<div>Loading...</div>}><About /></React.Suspense>
    },
    {
        path: '/contact',
        element: <React.Suspense fallback={<div>Loading...</div>}><Contact /></React.Suspense>
    },
    {
        path: '/user/:id',
        element: <React.Suspense fallback={<div>Loading...</div>}><User /></React.Suspense>
    }
];

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element} />
                ))}
            </Routes>
        </BrowserRouter>
    );
}`}
                </Prism>

                <p>在上面的代碼中，我們在 {` /user/:id `}路由中使用了 {` :id `}來表示動態URL參數。<br />
                    當我們訪問 {` /user/1 `}路由時，就會匹配到 {` /user/:id `}路由，並且 {` :id `}會被替換成 {` 1 `}。<br />
                    這樣就可以在路由中使用參數，並且可以通過參數來進行不同的操作。</p>

                <p>那我們的 {` /user/:id `}路由該如何獲取到 {` :id `}參數呢？<br />
                    我們可以通過 {` useParams() `}來獲取到 {` :id `}參數。</p>
                <p>以下是User.tsx的代碼：</p>

                <Prism language="typescript" style={vscDarkPlus}>
                    {`// User.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const { id } = useParams();
    return (
        <div>
            <h1>用戶頁面</h1>
            <p>用戶ID：{id}</p>
        </div>
    );
}`}
                </Prism>
            </div>

            <p>到這邊，恭喜你已經學會了常見的React-Router V6用法。</p>

            <div className="link_container">
                <Link href="/RouterComponents">
                    回到上一篇RouterComponents
                </Link>
                {/* <Link href="/RouterTransition">
                    前往Router轉場
                </Link> */}
            </div>
        </Layout>
    )
}

export default HomePage