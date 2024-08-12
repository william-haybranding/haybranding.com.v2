import "@/styles/globals.css";

import { Mulish } from "next/font/google";
const mulish = Mulish({ subsets: ["latin"], variable: "--font-mulish" });

export default function App({ Component, pageProps }) {
  return (
    <main className={`${mulish.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
