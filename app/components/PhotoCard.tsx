"use client";

interface PhotoCardProps {
  src: string;
  alt: string;
  caption: string;
  onClick: () => void;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ src, alt, caption, onClick }) => {
  return (
    <div
      className="group relative overflow-hidden rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <img src={src} alt={alt} className="w-full h-64 object-cover transition-transform transform group-hover:scale-110" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="text-lg text-white">{caption}</p>
      </div>
    </div>
  );
};

export default PhotoCard;

