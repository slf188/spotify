import React from 'react';
import { Home, Search, Library, Plus, Heart } from 'lucide-react';

const playlists = [
  'Chill Vibes',
  'Workout Mix',
  'Focus Flow',
  'Weekend Party',
  'Road Trip',
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-black h-full p-6">
      <div className="space-y-4">
        <div className="text-white font-bold text-2xl mb-8">Spotify</div>
        
        <nav className="space-y-4">
          <a href="#" className="text-gray-300 hover:text-white flex items-center gap-4 transition">
            <Home size={24} />
            Home
          </a>
          <a href="#" className="text-gray-300 hover:text-white flex items-center gap-4 transition">
            <Search size={24} />
            Search
          </a>
          <a href="#" className="text-gray-300 hover:text-white flex items-center gap-4 transition">
            <Library size={24} />
            Your Library
          </a>
        </nav>

        <div className="mt-8 space-y-4">
          <button className="text-gray-300 hover:text-white flex items-center gap-4 transition">
            <Plus size={24} className="p-1 bg-gray-300 text-black rounded-sm" />
            Create Playlist
          </button>
          <button className="text-gray-300 hover:text-white flex items-center gap-4 transition">
            <Heart size={24} className="p-1 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-sm" />
            Liked Songs
          </button>
        </div>

        <div className="mt-6 border-t border-gray-800 pt-6">
          <div className="space-y-3">
            {playlists.map((playlist) => (
              <a
                key={playlist}
                href="#"
                className="text-gray-300 hover:text-white block transition text-sm"
              >
                {playlist}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}