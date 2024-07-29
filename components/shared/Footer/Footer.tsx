"use client"
import Link from "next/link";
import Container from "@/hoc/Container"
import styles from "./Footer.module.css"
import '@/styles/reset.css'

const Footer = () => {

    return (
        <footer className={`${styles.footer} ${styles.page}`}>
            <Container className={styles.footer_container} >
                <div></div>
            </Container>
        </footer>
    )
}
export default Footer