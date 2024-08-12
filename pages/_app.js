import "@/styles/globals.css";

import { Mulish, Inter } from "next/font/google";
const mulish = Mulish({ subsets: ["latin"], variable: "--font-mulish" });

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${mulish.className} ${inter.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
