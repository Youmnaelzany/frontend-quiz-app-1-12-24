import type { Metadata } from "next";

import { Rubik } from 'next/font/google'
import "./globals.css";
import ToggleTheme from "@/components/ToggleTheme";

const rubik = Rubik({
  subsets: ['latin'],
  variable: "--font-rubik",
  display: 'swap',
});


export const metadata: Metadata = {
  title: "Frontend Mentor - Frontend quiz app",
  description: "Frontend Mentor - Frontend quiz app",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable}  antialiased box-border m-0 p-0 max-h-screen max-w-[90rem] `}
      >
        <ToggleTheme />
        {children}
      </body>
    </html>
  );
}
