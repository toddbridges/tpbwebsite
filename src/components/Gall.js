import React, { useState } from 'react';
import chair from '../assets/chair.webp';
import horns from '../assets/horns2.jpg';
import bees from '../assets/jujubees.jpg';
import levitt from '../assets/levitt.webp';
import jazzjam from '../assets/jazzjam.jpg';

const Gall = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State to track the selected image

  const images = [
    chair,
    horns, 
    bees, 
    levitt, 
    jazzjam
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image); // Set the clicked image as the selected image
  };

  const closeImage = () => {
    setSelectedImage(null); // Close the enlarged image
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Gallery</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery item ${index + 1}`}
            style={{
                width: '150px',
                height: 'auto', // Maintain aspect ratio
                maxHeight: '150px', // Prevent overly large images
                objectFit: 'contain', // Ensure the image fits within the specified dimensions
                cursor: 'pointer',
                transition: 'transform 0.3s',
              }}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>

      {/* Enlarged Image Modal */}
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={closeImage} // Close the modal when clicking outside the image
        >
          <img
            src={selectedImage}
            alt="Enlarged"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              borderRadius: '8px',
            }}
          />
        </div>
      )}
      <div>
                <h1>Videos</h1>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <a
                        href="https://youtu.be/zVMW7cFKx88?si=STe-CvP4Jm1G7WX5"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: '#1abc9c', fontSize: '1.2rem' }}
                    >
                        Trombone and Drumset playing
                    </a>
                    <a
                        href="https://youtu.be/RAkJguCHuHg?si=cMAmUQrr-j3dtzQW"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: '#1abc9c', fontSize: '1.2rem' }}
                    >
                        High School Homework video from 2021
                    </a>
                    <a
                        href="https://youtu.be/dx0CANgEA2A?si=o4iI-2tqSQi8-eiU"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: '#1abc9c', fontSize: '1.2rem' }}
                    >
                        Sample Snare Lesson
                    </a>
                    <a
                        href="https://youtu.be/kGZ_jU9Jy6s?si=L2iveRETndKrqLd1"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: '#1abc9c', fontSize: '1.2rem' }}
                    >
                        Flute play-along for 7th grade
                    </a>
                    <a
                        href="https://youtu.be/uh7mGjHef24?si=88T3Exo3hPSFLzKb"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: '#1abc9c', fontSize: '1.2rem' }}
                    >
                        Percussion auditions with help from Spiderman
                    </a>
                </div>
            </div>
    </div>
  );
};

export default Gall;
