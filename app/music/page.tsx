"use client";

import React from 'react';
import SoundCloudPlayer from '../components/SoundCloudPlayer';

const musicTracks = [
  {
    title: 'Sadness',
    soundCloudUrl: 'https://soundcloud.com/danis-ramirez-553323529/sadness',
  },
];

export default function MusicPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <div className="card bg-white dark:bg-dark-surface rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-300 dark:border-gray-700">
        <h2 className="text-3xl font-bold mb-4">Music Composition</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {musicTracks.map((track, index) => (
            <div key={index} className="border border-gray-300 dark:border-gray-700 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-2">{track.title}</h3>
              <SoundCloudPlayer url={track.soundCloudUrl} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

