import React from 'react';
import { Play, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from 'lucide-react';

export default function Player() {
  return (
    <div className="h-24 bg-gradient-to-b from-gray-900 to-black border-t border-gray-800 px-4 py-2">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center gap-4 w-1/3">
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            alt="Current track"
            className="h-14 w-14 rounded-md"
          />
          <div>
            <h4 className="text-white text-sm font-medium">Summer Nights</h4>
            <p className="text-gray-400 text-xs">The Midnight</p>
          </div>
        </div>

        <div className="flex flex-col items-center w-1/3">
          <div className="flex items-center gap-6">
            <button className="text-gray-400 hover:text-white transition">
              <Shuffle size={20} />
            </button>
            <button className="text-gray-400 hover:text-white transition">
              <SkipBack size={24} />
            </button>
            <button className="bg-white rounded-full p-2 hover:scale-105 transition">
              <Play size={24} className="text-black" fill="black" />
            </button>
            <button className="text-gray-400 hover:text-white transition">
              <SkipForward size={24} />
            </button>
            <button className="text-gray-400 hover:text-white transition">
              <Repeat size={20} />
            </button>
          </div>
          <div className="w-full mt-2 flex items-center gap-2">
            <span className="text-xs text-gray-400">2:14</span>
            <div className="h-1 flex-1 bg-gray-600 rounded-full">
              <div className="h-1 w-1/3 bg-white rounded-full"></div>
            </div>
            <span className="text-xs text-gray-400">3:45</span>
          </div>
        </div>

        <div className="flex items-center gap-2 w-1/3 justify-end">
          <Volume2 size={20} className="text-gray-400" />
          <div className="w-24 h-1 bg-gray-600 rounded-full">
            <div className="h-1 w-2/3 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}