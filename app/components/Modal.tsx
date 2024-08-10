import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  photos: { src: string; alt: string; caption: string }[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, photos, currentIndex, setCurrentIndex }) => {
  const handleNext = useCallback(() => {
    setCurrentIndex((currentIndex + 1) % photos.length);
  }, [currentIndex, photos.length, setCurrentIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  }, [currentIndex, photos.length, setCurrentIndex]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'Escape') {
      onClose();
    }
  }, [handleNext, handlePrev, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

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
          <Image
            src={photos[currentIndex].src}
            alt={photos[currentIndex].alt}
            width={800}
            height={600}
            className="max-w-full max-h-[80vh] object-contain transition-all duration-300 ease-in-out"
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

