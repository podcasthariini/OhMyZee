import { useState } from "react";
import { ChevronUp } from "lucide-react";
import nikahFixLogo from "../src/assets/NIKAHFIX.webp";
import guestIcon from "../src/assets/Guest.webp";
import echidnaImage from "../src/assets/echidna.jpg";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex w-full bg-black min-h-screen text-white">
      {!isOpen ? (
        <>
          <div className="mt-16 flex flex-col w-full h-full items-center">
            <img
              src={nikahFixLogo}
              alt=""
              srcset=""
              className="nikahfixImage"
            />
            <p className="mt-16 font-sans text-lg">Who's Watching</p>
            <div
              className="mt-10 hover:scale-125 flex flex-col items-center"
              onClick={() => setIsOpen(true)}
            >
              <img src={guestIcon} alt="" srcset="" className="guestImage" />
              <p className="mt-2">Guest</p>
            </div>
            <div className="mt-16 uppercase text-xs text-gray-500 outline outline-1 outline-gray-500 p-1">
              CLICK YOUR NAME
            </div>
          </div>
        </>
      ) : (
        <div className="flex w-full flex-col items-center cursor-not-allowed">
          <div className="flex w-screen justify-center">
            <div
              className="text-white bg-cover bg-center h-[80vh] relative flex flex-col items-start justify-end"
              style={{
                backgroundImage: `url(${echidnaImage})`,
                aspectRatio: "1080 / 1600",
              }}
            >
              <img
                src={nikahFixLogo}
                alt=""
                className="flex-none ps-8 w-[90px] h-[25px] z-10"
              />
              <div className="relative z-10 ps-8 mb-4">
                <p className="text-3xl font-sans font-bold">Denny & Echidna:</p>
                <p className="text-3xl font-sans font-bold">Sebelum Hari H</p>
              </div>
              <div className="bg-black w-full pt-4">
                <div className="mb-4 relative z-10 ps-8">
                  <span className="rounded-md text-xs font-sans p-1 bg-[#E50913] font-bold">
                    Coming soon
                  </span>
                  <span className="text-white text-[14px] font-medium ml-3">
                    24 Desember 2024
                  </span>
                </div>
                <div className="flex flex-wrap mb-5 relative z-10 ps-8">
                  <span className="bg-[#4D4D4D] py-1.5 px-2 rounded-2xl text-[10px] text-white m-1">
                    #romantic
                  </span>
                  <span className="bg-[#4D4D4D] py-1.5 px-2 rounded-2xl text-[10px] text-white m-1">
                    #getmarried
                  </span>
                  <span className="bg-[#4D4D4D] py-1.5 px-2 rounded-2xl text-[10px] text-white m-1">
                    #animegirls
                  </span>
                  <span className="bg-[#4D4D4D] py-1.5 px-2 rounded-2xl text-[10px] text-white m-1">
                    #echidnabestgirls
                  </span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
            </div>
          </div>
          <div className="mt-1 flex flex-col items-center cursor-pointer">
            <ChevronUp size={50} className="animate-upDown mb-2" />
            <span className="text-lg font-bold font-sans">SEE THE DETAIL</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
