

import React, { useState } from 'react';
import PlayerCard from './PlayerCard'; 
import Selected from './Selected';

const Player = ({ coins, setCoins }) => {
  const [activeTab, setActiveTab] = useState('available');
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handlePlayerSelection = (player) => {
    if (selectedPlayers.length < 6 && !selectedPlayers.some(p => p.playerId === player.playerId)) {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };
  const handlePlayerRemoval = (playerId) => {
    const removedPlayer = selectedPlayers.find(p => p.playerId === playerId);
    setSelectedPlayers(selectedPlayers.filter(p => p.playerId !== playerId));
    setCoins(coins + removedPlayer.biddingPrice); 
  };
  const handleAddMorePlayers = () => {
    setActiveTab('available');
  };
  return (
    <div className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 py-4">
            {activeTab === 'available' ? 'Available Players' : `Selected Players(${selectedPlayers.length}/6)`}
          </h2>
          <div className="flex">
            <button
              onClick={() => setActiveTab('available')}
              className={`px-4 py-2 text-sm font-medium rounded-t-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 ${
                activeTab === 'available'
                  ? 'bg-yellow-300 text-gray-900'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              Available
            </button>
            <button
              onClick={() => setActiveTab('selected')}
              className={`ml-2 px-4 py-2 text-sm font-medium rounded-t-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 ${
                activeTab === 'selected'
                  ? 'bg-yellow-300 text-gray-900'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              Selected ({selectedPlayers.length})
            </button>
          </div>
        </div>
       
        <div className="py-4">
          {activeTab === 'available' ? (
            <PlayerCard 
              coins={coins} 
              setCoins={setCoins}
              selectedPlayers={selectedPlayers}
              onPlayerSelect={handlePlayerSelection}
            />
          ) : (
            <Selected selectedPlayers={selectedPlayers}  onPlayerRemove={handlePlayerRemoval}   onAddMorePlayers={handleAddMorePlayers}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Player;
