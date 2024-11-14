import { useState } from "react";
import { ChevronUp } from "lucide-react";
import nikahFixLogo from "../src/assets/NIKAHFIX.webp";
import guestIcon from "../src/assets/Guest.webp";
import echidnaImage from "../src/assets/echidna.jpg";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    window.alert("hahaha kasian wibu halu");
  };
  return (
    <div className="flex w-full bg-black h-svh text-white">
      {!isOpen ? (
        <div className="mt-16 flex flex-col w-full items-center max-h-svh">
          <img src={nikahFixLogo} alt="NikahFix Logo" className="w-32 h-auto" />
          <p className="mt-16 font-sans text-lg">Who's Watching</p>
          <div
            className="mt-10 hover:scale-125 flex flex-col items-center transition-transform duration-200 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <img src={guestIcon} alt="Guest Icon" className="w-24 h-auto" />
            <p className="mt-2">Guest</p>
          </div>
          <div className="mt-16 uppercase text-xs text-gray-500 outline outline-1 outline-gray-500 p-1">
            CLICK YOUR NAME
          </div>
        </div>
      ) : (
        <div className="flex w-full flex-col items-center cursor-not-allowed max-h-svh">
          <div className="w-full max-w-md mx-auto">
            <div
              className="relative w-full pb-[160%] bg-cover bg-center"
              style={{ backgroundImage: `url(${echidnaImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 pb-8">
                <img
                  src={nikahFixLogo}
                  alt="NikahFix Logo"
                  className="w-20 h-auto mb-4"
                />
                <p className="text-2xl font-sans font-bold">Denny & Echidna:</p>
                <p className="text-2xl font-sans font-bold mb-4">
                  Sebelum Hari H
                </p>
                <div className="mb-4">
                  <span className="rounded-md text-xs font-sans p-1 bg-[#E50913] font-bold">
                    Coming soon
                  </span>
                  <span className="text-white text-sm font-medium ml-3">
                    24 Desember 2024
                  </span>
                </div>
                <div className="flex flex-wrap mb-2">
                  {[
                    "romantic",
                    "getmarried",
                    "animegirls",
                    "echidnabestgirls",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#4D4D4D] py-1 px-2 rounded-full text-xs text-white mr-2 mb-2"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div
                  className="mt-2 flex flex-col items-center cursor-pointer"
                  onClick={handleClick}
                >
                  <ChevronUp className="w-12 h-12 animate-bounce" />
                  <span className="text-lg font-bold font-sans">
                    SEE THE DETAIL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
