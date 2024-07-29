/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Link from 'next/link';
import Burger from "../../icons/Burger";
import { links } from "./getData";
import Portal from "../../../hoc/Portal";
import styles from "./Header.module.scss";

// interface IHeader {
//     isActive: (href: string) => boolean;
// }

const HeaderMobile = () => {
    const [open, setOpen] = useState<boolean>(false);
    const toggleOpen = () => {
        setOpen(prev => !prev);
    }
    const logoOpen = () => {
        setOpen(prev => false);
    }
    return (
        <>
        </>
    )
}

export default HeaderMobile