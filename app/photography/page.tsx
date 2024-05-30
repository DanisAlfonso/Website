"use client";

import React, { useState } from 'react';
import PhotoCard from '../components/PhotoCard';
import Modal from '../components/Modal';

const photos = [
  { src: '/photos/Casa Jardin 2.jpg', alt: 'Photo 1', caption: 'Home.' },
  { src: '/photos/MontR.jpg', alt: 'Photo 2', caption: 'The mountain.' },
  { src: '/photos/Weinberg.jpg', alt: 'Photo 4', caption: 'Weinberg.' },
];

export default function PhotographyPage() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const handlePhotoClick = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeModal = () => {
    setSelectedPhotoIndex(null);
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="bg-white dark:bg-dark-surface rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold mb-4">Photography</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <PhotoCard
              key={index}
              src={photo.src}
              alt={photo.alt}
              caption={photo.caption}
              onClick={() => handlePhotoClick(index)}
            />
          ))}
        </div>
      </section>
      {selectedPhotoIndex !== null && (
        <Modal
          isOpen={selectedPhotoIndex !== null}
          onClose={closeModal}
          photos={photos}
          currentIndex={selectedPhotoIndex}
          setCurrentIndex={setSelectedPhotoIndex}
        />
      )}
    </div>
  );
}

