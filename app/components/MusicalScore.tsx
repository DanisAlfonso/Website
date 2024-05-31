// app/components/MusicalScore.tsx
import React from 'react';

interface MusicalScoreProps {
  src: string;
}

const MusicalScore: React.FC<MusicalScoreProps> = ({ src }) => {
  return (
    <div className="mt-4">
      <img src={src} alt="Musical Score" className="max-w-full h-auto rounded-lg shadow-md" />
    </div>
  );
};

export default MusicalScore;

