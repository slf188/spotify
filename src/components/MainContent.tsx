import React from 'react';
import { Play, Clock3 } from 'lucide-react';

const tracks = [
  { id: 1, title: 'Deep Blue', artist: 'The Midnight', duration: '4:15', plays: '2.5M' },
  { id: 2, title: 'Crystalline', artist: 'The Midnight', duration: '3:45', plays: '1.8M' },
  { id: 3, title: 'River of Darkness', artist: 'The Midnight', duration: '5:02', plays: '3.1M' },
  { id: 4, title: 'Lost Boy', artist: 'The Midnight', duration: '4:37', plays: '2.2M' },
  { id: 5, title: 'Shadows', artist: 'The Midnight', duration: '3:58', plays: '1.9M' },
];

export default function MainContent() {
  return (
    <div className="flex-1 bg-gradient-to-b from-indigo-900 to-black overflow-y-auto">
      <div className="p-8">
        <div className="flex items-end gap-6 mb-8">
          <img
            src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            alt="Album cover"
            className="w-60 h-60 shadow-2xl"
          />
          <div>
            <p className="text-sm font-bold text-white mb-2">ALBUM</p>
            <h1 className="text-5xl font-bold text-white mb-6">Monsters</h1>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                alt="Artist"
                className="w-6 h-6 rounded-full"
              />
              <span className="font-bold">The Midnight</span>
              <span>• 2021 • 12 songs, 48 min</span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <button className="bg-green-500 text-black rounded-full p-4 hover:scale-105 transition">
            <Play size={24} fill="black" />
          </button>
        </div>

        <div className="text-gray-300">
          <div className="grid grid-cols-[16px_4fr_3fr_2fr_minmax(120px,1fr)] gap-4 px-4 py-2 text-sm font-medium text-gray-400 border-b border-gray-800">
            <div>#</div>
            <div>TITLE</div>
            <div>ALBUM</div>
            <div>PLAYS</div>
            <div className="flex justify-end">
              <Clock3 size={16} />
            </div>
          </div>

          {tracks.map((track, index) => (
            <div
              key={track.id}
              className="grid grid-cols-[16px_4fr_3fr_2fr_minmax(120px,1fr)] gap-4 px-4 py-3 text-sm hover:bg-white/10 rounded-lg transition group"
            >
              <div className="flex items-center">{index + 1}</div>
              <div className="flex items-center">{track.title}</div>
              <div className="flex items-center">Monsters</div>
              <div className="flex items-center">{track.plays}</div>
              <div className="flex items-center justify-end">{track.duration}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}