import { useState } from "react";
import Navbar from "./Navbar";
import banner from "../assets/banner-main.png";
import Player from "./Player";
import bgShadow from "../assets/bg-shadow.png";

export default function Banner() {
  const [coins, setCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const handleClaimCredit = () => {
    setCoins(coins + 5000000);
  };
  const handlePlayerSelect = (player) => {
    setSelectedPlayers([...selectedPlayers, player]);
  };

  return (
    <>
      <Navbar coins={coins} />

      <div className="relative py-16 mt-5 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl overflow-hidden"
      style={{
        backgroundImage: `url(${bgShadow})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#131313',
        backgroundBlendMode: 'lighten',
       
      }}
      >
        
        <div className="flex flex-col items-center justify-center h-full text-white text-center px-4">
          <div className="">
            <img
              src={banner}
              alt="Cricket Equipment"
              width={80}
              height={80}
              className="object-contain"
            />
            <div className="bg-green-600 text-white text-xs font-bold py-1 px-2 rounded mt-1">
              CRICKET
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 max-w-2xl">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-300">
            Beyond Boundaries Beyond Limits
          </p>

          <button
            onClick={handleClaimCredit}
            className="relative px-6 py-3 bg-gradient-to-b from-yellow-300 to-yellow-400 text-black font-bold text-sm rounded-full
                      shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Claim Free Credit</span>
          </button>
        </div>
      </div>
      <Player
        coins={coins}
        setCoins={setCoins}
        selectedPlayers={selectedPlayers}
        onPlayerSelect={handlePlayerSelect}
      />
    </>
  );
}
