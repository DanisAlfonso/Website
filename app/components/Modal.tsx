"use client";

import { useEffect, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  photos: { src: string; alt: string }[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, photos, currentIndex, setCurrentIndex }) => {
  const [fadeClass, setFadeClass] = useState<string>('');

  useEffect(() => {
    if (isOpen) {
      setFadeClass('fade-in');
    }
  }, [currentIndex, isOpen]);

  if (!isOpen) return null;

  const handleNext = () => {
    setFadeClass('');
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % photos.length);
    }, 300);
  };

  const handlePrev = () => {
    setFadeClass('');
    setTimeout(() => {
      setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <button className="absolute top-4 right-4 text-white text-3xl" onClick={onClose}>
        &times;
      </button>
      <div className="relative flex flex-col items-center">
        <img
          src={photos[currentIndex].src}
          alt={photos[currentIndex].alt}
          className={`max-w-full max-h-screen rounded-lg transition-opacity duration-300 ${fadeClass}`}
        />
        <div className="flex justify-between w-full mt-4 px-4">
          <button
            className="text-white text-3xl bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
            onClick={handlePrev}
          >
            &larr;
          </button>
          <button
            className="text-white text-3xl bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
            onClick={handleNext}
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

