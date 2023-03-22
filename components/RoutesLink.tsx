import Link from "next/link";
import { useRouter } from "next/router";

const RoutesLink = () => {
    const router = useRouter();
    return (
        <>
            <Link href="/" className={router.pathname === "/" ? "active" : ""}>回到首頁</Link>
            <Link href="/RouterBasic" className={router.pathname === "/RouterBasic" ? "active" : ""}>RouterBasic</Link>
            <Link href="/RouterComponents" className={router.pathname === "/RouterComponents" ? "active" : ""}>RouterComponents</Link>
            <Link href="/RouterDynamic" className={router.pathname === "/RouterDynamic" ? "active" : ""}>RouterDynamic</Link>
            <Link href="/RouterTransition" className={router.pathname === "/RouterTransition" ? "active" : ""}>RouterTransition</Link>
        </>
    );
};

export default RoutesLink;