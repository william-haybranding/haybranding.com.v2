import Header from "@/components/Header/index";
import Phrase from "./Phrase";

export default function Navbar() {
  return (
    <div className="bg-white">
      <div className="w-full max-w-screen-xl mx-auto p-4 flex flex-wrap justify-between">
        <div>Hay Branding</div>
        <div className="hidden md:flex">
          <Phrase />
        </div>

        <div>
          <Header />
        </div>
      </div>
    </div>
  );
}
