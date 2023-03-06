import Link from 'next/link'
import { useRouter } from 'next/router';
import styles from "./NavBar.module.css";

export default function NavBar() {
    const router = useRouter();
    console.log(router);
    return (
        <nav>
            <Link href="/">
                <a className={router.pathname === "/" ? styles.active : ""}></a>
            </Link>
            <Link href="/about">
                About
            </Link>
        </nav>
    );
}