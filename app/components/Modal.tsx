import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  photos: { src: string; alt: string; caption: string }[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, photos, currentIndex, setCurrentIndex }) => {
  if (!isOpen) return null;

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative bg-white dark:bg-dark-surface p-4 rounded-lg shadow-lg max-w-3xl">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-2 text-white dark:text-dark-text"
        >
          &times;
        </button>
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={handlePrev}
            className="text-white dark:text-dark-text bg-gray-600 dark:bg-gray-800 p-2 rounded-full"
          >
            &larr;
          </button>
          <img
            src={photos[currentIndex].src}
            alt={photos[currentIndex].alt}
            className="max-w-full max-h-[80vh] object-contain"
          />
          <button
            onClick={handleNext}
            className="text-white dark:text-dark-text bg-gray-600 dark:bg-gray-800 p-2 rounded-full"
          >
            &rarr;
          </button>
        </div>
        <p className="text-center mt-2 text-gray-700 dark:text-gray-300">{photos[currentIndex].caption}</p>
      </div>
    </div>
  );
};

export default Modal;

