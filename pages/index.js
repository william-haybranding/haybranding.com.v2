import Image from "next/image";
import { Inter } from "next/font/google";
import ServiceTabs from "@/components/tabs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen p-4 ${inter.className}`}>
      <div className="w-full max-w-screen-xl">
        <ServiceTabs />
      </div>
    </main>
  );
}
