import {Inter} from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/header/header";
import Clock from "@/components/clock/clock";
import Providers from "@/Providers/providers";
import MainHeader from "@/components/header/main-header";
import NavigationMenu from "@/components/navbar/navigation-menu";
import SalesLayout from "@/components/salesLayout/sales-layout";

const inter = Inter({subsets: ["latin"]});
const iranYekanRegFont = localFont({
    src: "./../public/Fonts/iranyekanwebregular.woff2",
    variable: "--IYRFont",
    style: "swap",
});
const iranYekanFont = localFont({
    src: "./../public/Fonts/iranyekanweblight.woff",
    variable: "--IRFont",
    style: "swap",
});
const strenuousFont = localFont({
    src: "./../public/Fonts/strenuousbl.otf",
    variable: "--STFont",
    style: "swap",
});

export const metadata = {
    title: "فروشگاه دولدور",
    description: "Generated by create next app",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body
            className={`${inter.className} ${iranYekanFont.variable} ${iranYekanRegFont.variable} w-screen overflow-x-clip`}>
        <Providers>
            <MainHeader />
            <NavigationMenu />
            {/* <SalesLayout /> */}
            {children}
        </Providers>
        </body>
        </html>
    );
}
