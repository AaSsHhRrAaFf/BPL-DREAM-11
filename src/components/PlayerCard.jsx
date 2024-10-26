import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const playersData = {
  players: [
    {
      playerId: "VK18",
      name: "Virat Kohli",
      country: "India",
      image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/2.png",
      role: "Batsman",
      battingStyle: "Right-handed",
      bowlingStyle: "Right-arm medium",
      biddingPrice: 1500000,
    },
    {
      playerId: "AB17",
      name: "AB de Villiers",
      country: "South Africa",
      image: "https://documents.iplt20.com/playerheadshot/ipl/284/233.png",
      role: "Wicket-keeper Batsman",
      battingStyle: "Right-handed",
      bowlingStyle: "Right-arm medium",
      biddingPrice: 1100000,
    },
    {
      playerId: "RS45",
      name: "Rohit Sharma",
      country: "India",
      image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/6.png",
      role: "Batsman",
      battingStyle: "Right-handed",
      bowlingStyle: "Right-arm off break",
      biddingPrice: 1400000,
    },
    {
      playerId: "BA99",
      name: "Ben Stokes",
      country: "England",
      image: "https://documents.iplt20.com/playerheadshot/ipl/284/1154.png",
      role: "All-rounder",
      battingStyle: "Left-handed",
      bowlingStyle: "Right-arm fast-medium",
      biddingPrice: 1250000,
    },
    {
      playerId: "JB22",
      name: "Jasprit Bumrah",
      country: "India",
      image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/9.png",
      role: "Bowler",
      battingStyle: "Right-handed",
      bowlingStyle: "Right-arm fast",
      biddingPrice: 1200000,
    },
    {
      playerId: "KW22",
      name: "Kane Williamson",
      country: "New Zealand",
      image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/65.png",
      role: "Batsman",
      battingStyle: "Right-handed",
      bowlingStyle: "Right-arm off break",
      biddingPrice: 1000000,
    },
    {
      playerId: "MS07",
      name: "MS Dhoni",
      country: "India",
      image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/57.png",
      role: "Wicket-keeper Batsman",
      battingStyle: "Right-handed",
      bowlingStyle: "Right-arm medium",
      biddingPrice: 1300000,
    },
    {
      playerId: "RA08",
      name: "Rashid Khan",
      country: "Afghanistan",
      image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/218.png",
      role: "All-rounder",
      battingStyle: "Right-handed",
      bowlingStyle: "Right-arm leg break",
      biddingPrice: 1150000,
    },
    {
      playerId: "SP49",
      name: "Steve Smith",
      country: "Australia",
      image: "https://documents.iplt20.com/playerheadshot/ipl/284/271.png",
      role: "Batsman",
      battingStyle: "Right-handed",
      bowlingStyle: "Right-arm leg break",
      biddingPrice: 1050000,
    },
    {
      playerId: "DW23",
      name: "David Warner",
      country: "Australia",
      image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/214.png",
      role: "Batsman",
      battingStyle: "Left-handed",
      bowlingStyle: "Right-arm leg break",
      biddingPrice: 1100000,
    },
    {
      playerId: "PS17",
      name: "Pat Cummins",
      country: "Australia",
      image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/33.png",
      role: "Bowler",
      battingStyle: "Right-handed",
      bowlingStyle: "Right-arm fast",
      biddingPrice: 1350000,
    },
    {
      playerId: "KR55",
      name: "KL Rahul",
      country: "India",
      image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/19.png",
      role: "Wicket-keeper Batsman",
      battingStyle: "Right-handed",
      bowlingStyle: "None",
      biddingPrice: 1100000,
    },
  ],
};

const CricketPlayerCards = ({
  coins,
  setCoins,
  selectedPlayers,
  onPlayerSelect,
}) => {
  const handleChoosePlayer = (player) => {
    if (selectedPlayers.some((p) => p.playerId === player.playerId)) {
      console.log(555);
      toast.info(`${player.name} is already in your team!`);
      return;
    }

    if (coins < player.biddingPrice) {
      toast.error("You do not have enough coins to select this player.");
      return;
    }
    if (selectedPlayers.length >= 6) {
      toast.warning("You can only select up to 6 players.");
      return;
    }

    onPlayerSelect(player);
    setCoins(coins - player.biddingPrice);
  };

  return (
    <div className="container mx-auto p-6 mb-28">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {playersData.players.map((player) => (
          <div
            key={player.playerId}
            className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-400 via-blue-500 to-purple-500 flex flex-col p-0"
          >
            <div className="relative">
              <img
                src={player.image}
                alt={player.name}
                className="w-full h-full object-cover rounded-t-xl"
              />
            </div>
            <div className="px-6 py-4 bg-white bg-opacity-90 backdrop-blur-sm">
              <div className="flex items-center mb-2">
                <img
                  className="w-5 h-5 text-blue-600 mr-2"
                  src="https://img.icons8.com/?size=100&id=7819&format=png&color=000000"
                  alt="Player Icon"
                />
                <span className="font-bold text-xl text-gray-800">
                  {player.name}
                </span>
              </div>
              <div className="flex items-center mb-2">
                <img
                  className="w-4 h-4 text-blue-600 mr-2"
                  src="https://img.icons8.com/?size=100&id=2755&format=png&color=000000"
                  alt="Country Icon"
                />
                <span className="text-gray-700">{player.country}</span>
                <span className="ml-auto bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold">
                  {player.role}
                </span>
              </div>
              <div className="space-y-1 text-sm text-gray-700">
                <div className="pr-4">
                  <p className="font-medium flex items-center">
                    Rating :{" "}
                    <span>
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          defaultChecked
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                      </div>
                    </span>
                  </p>
                </div>
                <p>
                  <span className="font-medium">Batting:</span>{" "}
                  {player.battingStyle}
                </p>
                <p>
                  <span className="font-medium">Bowling:</span>{" "}
                  {player.bowlingStyle}
                </p>
                <p className="text-green-600 font-medium">
                  Bidding Price: ${player.biddingPrice}
                </p>
              </div>
              <button
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 shadow-md hover:shadow-lg mt-4"
                onClick={() => handleChoosePlayer(player)}
              >
                {selectedPlayers.some((p) => p.playerId === player.playerId)
                  ? "Player Selected"
                  : "Choose Player"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CricketPlayerCards;
