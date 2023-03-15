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
            <div>
                <h1>動態Router介紹</h1>
                <p>我們將介紹React Router v6中的動態路由配置，以及動態路由載入以及動態URL參數。</p>

                <h2>動態路由載入(又俗稱懶加載)</h2>
                <p>RouterDynamic 是 React Router v6 中的一個新特性，用於動態載入路由配置。<br />
                    在以前的版本中，所有的路由都必須先在組件中配置好，然後再通過 {` <Routes> `}組件進行呈現。<br />
                    這樣對於大型應用來說會變得非常冗長且難以維護。</p>

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

                <h2>動態路由配置</h2>
                <p>動態路由配置是一種更簡單的動態路由載入方式，它可以讓我們在不修改代碼的情況下，動態的添加或者刪除路由。<br />
                    這樣就可以在不修改代碼的情況下，動態的添加或者刪除路由。</p>

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

                <p>在上面的代碼中，我們將路由配置放在了一個陣列中，然後通過 {` <Routes> `}組件的 {` children `}屬性來進行渲染。<br />
                    這樣就可以在不修改代碼的情況下，動態的添加或者刪除路由。</p>

                <p>當然，我們也可以把路由配置放在一個外部的文件中，然後通過 {` <Routes> `}組件的 {` children `}屬性來進行渲染。<br />
                    像是使用一個 {` routes.tsx `}文件來進行路由配置，然後在 {` App.tsx `}文件中進行引入。</p>

                <h2>動態URL參數</h2>
                <p>動態URL參數是一種可以在路由中使用參數的方式，這樣就可以在路由中使用參數，並且可以通過參數來進行不同的操作。</p>

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
            <h3>下一篇：動態Router</h3>
            <div className="link_container">
                <Link href="/RouterParameters">
                    回到上一篇RouterParameters
                </Link>
                <Link href="/RouterTransition">
                    前往Router轉場
                </Link>
            </div>
        </Layout>
    )
}

export default HomePage