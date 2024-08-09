"use client";

import React, { useState } from 'react';
import PhotoCard from '../components/PhotoCard';
import Modal from '../components/Modal';

interface Photo {
  src: string;
  alt: string;
  caption: string;
}

interface PhotoCategory {
  [category: string]: Photo[];
}

const photoCategories: PhotoCategory = {
  "Nature (my birthplace, Honduras)": [
    { src: '/photos/MontR.jpg', alt: 'Photo 2', caption: 'The mountain' },
    { src: '/photos/Weinberg.jpg', alt: 'Photo 3', caption: 'On the way to the waterfall' },
    { src: '/photos/dorf.jpg', alt: 'Photo 4', caption: 'On the way to the waterfall' },
    { src: '/photos/sm.jpeg', alt: 'Photo 5', caption: 'It has rained in the village' },
  ],
  "Costa Rica": [
    { src: '/photos/cr1.jpeg', alt: 'Photo 1', caption: 'Corcovado National Park' },
    { src: '/photos/cr2.jpeg', alt: 'Photo 2', caption: 'Corcovado National Park' },
    { src: '/photos/cr0.jpg', alt: 'Photo 3', caption: 'Corcovado National Park' },
    { src: '/photos/cr5.jpeg', alt: 'Photo 4', caption: 'Corcovado National Park' },
    { src: '/photos/cr6.jpeg', alt: 'Photo 5', caption: 'Corcovado National Park' },
  ],
  "Something Delicious to Eat or Drink": [
    { src: '/photos/cafe1.jpg', alt: 'Photo 4', caption: 'For my enjoyment' },
    { src: '/photos/cafe2.jpg', alt: 'Photo 4', caption: 'For my enjoyment' },
    { src: '/photos/miel.jpg', alt: 'Photo 5', caption: 'What a delight' },
    { src: '/photos/Torrejas.jpg', alt: 'Photo 6', caption: 'What a delight' },
    { src: '/photos/CafeT.jpg', alt: 'Photo 6', caption: 'Roasting coffee' },
    { src: '/photos/beer1.jpg', alt: 'Photo 7', caption: 'Beer in Bavaria' },
    { src: '/photos/beer2.jpg', alt: 'Photo 8', caption: 'Beer in Bavaria' },
    { src: '/photos/beer3.jpg', alt: 'Photo 8', caption: 'Beer in Bavaria' },
    { src: '/photos/Kuchen.jpg', alt: 'Photo 8', caption: 'Cake in Bavaria' },
    { src: '/photos/tortilla.jpg', alt: 'Photo 9', caption: 'I have prepared a Spanish omelette' },
    { src: '/photos/papas.jpg', alt: 'Photo 10', caption: 'I made myself some fries' },
  ],
  "Germany": [
    { src: '/photos/Mannheim.jpg', alt: 'Photo 1', caption: 'First city I visited in Germany, Mannheim' },
    { src: '/photos/Kaffee.jpg', alt: 'Photo 1', caption: 'Visiting a cafe on my first day in Germany' },
    { src: '/photos/winter1.jpg', alt: 'Photo 1', caption: 'Winter in Stolzenroth' },
    { src: '/photos/winter2.jpg', alt: 'Photo 2', caption: 'Winter in Stolzenroth' },
    { src: '/photos/winter3.jpg', alt: 'Photo 3', caption: 'Winter in Stolzenroth' },
    { src: '/photos/winter4.jpg', alt: 'Photo 4', caption: 'Winter in Stolzenroth' },
    { src: '/photos/winter5.jpg', alt: 'Photo 5', caption: 'Winter in Stolzenroth' },
    { src: '/photos/winter6.jpg', alt: 'Photo 6', caption: 'Winter in Stolzenroth' },
    { src: '/photos/winter7.jpg', alt: 'Photo 6', caption: 'Winter in Stolzenroth' },
    { src: '/photos/Stolzenroth.jpg', alt: 'Photo 6', caption: 'Spring in Stolzenroth' },
    { src: '/photos/Baum.jpeg', alt: 'Photo 6', caption: 'Spring in Stolzenroth' },
    { src: '/photos/car.jpg', alt: 'Photo 6', caption: 'While walking aimlessly through the streets of Bamberg' },
    { src: '/photos/car2.jpg', alt: 'Photo 6', caption: 'While walking aimlessly through the streets of Bamberg' },
  ],
  "Spain 2020": [
    { src: '/photos/B1.jpg', alt: 'Photo 1', caption: 'Montserrat' },
    { src: '/photos/B2.jpg', alt: 'Photo 2', caption: 'Montserrat' },
    { src: '/photos/B3.jpg', alt: 'Photo 3', caption: 'Montserrat' },
    { src: '/photos/B4.jpg', alt: 'Photo 4', caption: 'Montserrat' },
    { src: '/photos/B5.jpg', alt: 'Photo 5', caption: 'Montserrat' },
    { src: '/photos/B6.jpg', alt: 'Photo 6', caption: 'Montserrat' },
    { src: '/photos/B7.jpg', alt: 'Photo 7', caption: 'Montserrat' },
  ],
  "Hause Graden": [
    { src: '/photos/garden1.jpg', alt: 'Photo 1', caption: 'This is the garden of the house' },
    { src: '/photos/garden2.jpg', alt: 'Photo 2', caption: 'This is the garden of the house' },
    { src: '/photos/garden3.jpg', alt: 'Photo 3', caption: 'This is the garden of the house' },
    { src: '/photos/garden4.jpg', alt: 'Photo 4', caption: 'This is the garden of the house' },
    { src: '/photos/garden5.jpg', alt: 'Photo 5', caption: 'This is the garden of the house' },
    { src: '/photos/garden6.jpg', alt: 'Photo 6', caption: 'This is the garden of the house' },
    { src: '/photos/garden7.jpg', alt: 'Photo 7', caption: 'This is the garden of the house' },
    { src: '/photos/garden8.jpg', alt: 'Photo 8', caption: 'This is the garden of the house' },
    { src: '/photos/home.jpg', alt: 'Photo 8', caption: 'This is the garden of the house' },
    { src: '/photos/Casa Jardin 2.jpg', alt: 'Photo 1', caption: 'My second stone wall' },
    { src: '/photos/sol1.jpg', alt: 'Photo 8', caption: "The cat thinking about life's difficulties" },
    { src: '/photos/Gato.jpg', alt: 'Photo 8', caption: "The cat thinking about life's difficulties" },
  ],
  "Me in my Good Old Fitness Days 😜": [
    { src: '/photos/fitness1.jpg', alt: 'Photo 1', caption: 'Me somewhere between 2015 and 2018' },
    { src: '/photos/fitness2.jpg', alt: 'Photo 2', caption: 'Me somewhere between 2015 and 2018' },
    { src: '/photos/fitness3.jpg', alt: 'Photo 3', caption: 'Me somewhere between 2015 and 2018' },
    { src: '/photos/fitness4.jpg', alt: 'Photo 4', caption: 'Me somewhere between 2015 and 2018' },
    { src: '/photos/hat.jpg', alt: 'Photo 5', caption: 'Me somewhere between 2015 and 2018' },
  ],
  "College Graduation": [
    { src: '/photos/U-FM.jpg', alt: 'Photo 1', caption: 'Graduation of the degree in physics at UNAH (2013)' },
    { src: '/photos/U-FS.jpg', alt: 'Photo 2', caption: 'Graduation of the degree in physics at UNAH (2013)' },
    { src: '/photos/USisterS.jpg', alt: 'Photo 2', caption: 'Graduation of the degree in physics at UNAH (2013)' },
  ],
  "High School Graduation": [
    { src: '/photos/cole.jpg', alt: 'Photo 1', caption: 'I remember that I hated high school 🧐' },
    { src: '/photos/coleMF.jpg', alt: 'Photo 2', caption: '🙂' },
  ],
};

export default function PhotographyPage() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [currentPhotos, setCurrentPhotos] = useState<Photo[]>([]);

  const handlePhotoClick = (index: number, category: keyof PhotoCategory) => {
    setCurrentPhotos(photoCategories[category]);
    setSelectedPhotoIndex(index);
  };

  const closeModal = () => {
    setSelectedPhotoIndex(null);
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {Object.entries(photoCategories).map(([category, photos]) => (
        <section key={category} className="bg-white dark:bg-dark-surface rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-4">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {photos.map((photo, index) => (
              <PhotoCard
                key={index}
                src={photo.src}
                alt={photo.alt}
                caption={photo.caption}
                onClick={() => handlePhotoClick(index, category)}
              />
            ))}
          </div>
        </section>
      ))}
      {selectedPhotoIndex !== null && (
        <Modal
          isOpen={selectedPhotoIndex !== null}
          onClose={closeModal}
          photos={currentPhotos}
          currentIndex={selectedPhotoIndex}
          setCurrentIndex={setSelectedPhotoIndex}
        />
      )}
    </div>
  );
}

