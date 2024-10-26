export default function Selected({ selectedPlayers, onPlayerRemove, onAddMorePlayers }) {
    return (
      <>
  
      <div className="mb-28">
  
       
        {selectedPlayers.map((player) => (
          <div
            key={player.playerId}
            className="p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl mb-4"
          >
            <div className="flex justify-between items-center bg-white rounded-xl">
              <div className="flex items-center gap-3 p-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center shadow-inner">
                  <img src={player.image} />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-gray-900 font-semibold text-sm hover:text-blue-600 transition-colors duration-200">
                    {player.name}
                  </h2>
                  <p className="text-gray-500 text-xs flex items-center gap-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                    {player.role}
                  </p>
                </div>
              </div>
              <div className="pr-4">
                <button
                  onClick={() => onPlayerRemove(player.playerId)}
                  className="transform transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-lg p-2"
                >
                  <img
                    className="w-10 h-10 object-contain"
                    src="https://img.icons8.com/?size=100&id=102350&format=png&color=000000"
                    alt="Remove player"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
  
        <button
        onClick={onAddMorePlayers}
        className="bg-yellow-300 text-black font-semibold py-2 px-4 rounded-full border-2 border-white shadow-md hover:bg-yellow-400 transition-colors duration-300">
        Add More Player
        </button>
      </div>
        
      </>
    );
  }
  