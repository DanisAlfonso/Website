// app/components/PhotoCard.tsx
"use client";

interface PhotoCardProps {
  src: string;
  alt: string;
  caption: string;
  onClick: () => void;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ src, alt, caption, onClick }) => {
  return (
    <div className="card p-2 cursor-pointer" onClick={onClick}>
      <div className="overflow-hidden">
        <img 
          src={src} 
          alt={alt} 
          loading="lazy" 
          className="w-full h-64 object-cover transition-transform transform hover:scale-105 hover:shadow-lg" 
        />
      </div>
      <div className="p-4">
        <p className="text-lg text-gray-700 dark:text-dark-text">{caption}</p>
      </div>
    </div>
  );
};

export default PhotoCard;

