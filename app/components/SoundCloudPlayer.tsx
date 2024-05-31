// app/components/SoundCloundPlayer.tsx
import React from 'react';

interface SoundCloudPlayerProps {
  url: string;
}

const SoundCloudPlayer: React.FC<SoundCloudPlayerProps> = ({ url }) => {
  return (
    <iframe
      width="100%"
      height="166"
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%2300aabb&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
    ></iframe>
  );
};

export default SoundCloudPlayer;
