import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/navbar/navbar";
import TransitionProvider from "@/components/providers/transitionProvider";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "José Dev Portfolio App",
    description: "José Dev Portfolio App",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <TransitionProvider>
            {children}
        </TransitionProvider>
        </body>
        </html>
    );
}
