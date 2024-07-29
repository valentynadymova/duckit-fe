/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";
import "./styles.css"
import '@/styles/reset.css'
import '@/styles/global.css'
import AdaptiveProvider from "@/context/AdaptiveContext";
import { IChildren } from "../types";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
// import ToastProvider from '@/context/ToastProvider'

export const metadata: Metadata = {
  title: "duck_it FE",
  description: "Template Next.js Front-End"
};

const RootLayout: React.FC<IChildren> = ({ children }) => {
  return (
    <html lang="pl">
      <head>
        {/* ПОДКЛЮЧИТЬ ШРИФТ ТУТ | google font here */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="body">
        <div id="portal" />
        <AdaptiveProvider>
          <Header />
          {children}
          <Footer />
        </AdaptiveProvider>
      </body>
    </html >
  )
}

export default RootLayout
