import Link from "next/link"
import styles from "./Header.module.css"

export default function Header(){
    return(
        <>
        <div className={styles.container}>

            <div className={styles.links}>
                <h1>MeuSite</h1>
            </div>
            <div>
                <Link href="/">Home</Link>
                <Link href="/pages/galeria">Galeria</Link>
                <Link href="/pages/contato">Contato</Link>
            </div>
        </div>
        </>
    )
}