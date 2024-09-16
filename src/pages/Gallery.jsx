import React, { useState } from 'react';

const Gallery = () => {
  const images = [
    'data:image/jpeg;base64,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',
    'data:image/jpeg;base64,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',
    'data:image/jpeg;base64,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',
    'https://source.unsplash.com/collection/190730/400x300',
    'https://source.unsplash.com/collection/190731/400x300',
    'https://source.unsplash.com/collection/190732/400x300',
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle image click
  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 relative">
      {/* Background image with opacity */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url("https://source.unsplash.com/random")' }}></div>

      {/* Image Gallery Header */}
      <div className="relative z-10 text-center mb-10 p-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-xl border border-white/30">
        <h1 className="text-3xl font-bold text-white">Image Gallery</h1>
        <p className="text-gray-100 mt-2">Explore our collection of beautiful images</p>
      </div>

      {/* Image Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => handleImageClick(src)} // Set selected image when clicked
          >
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>

      {/* Subtle floating animation */}
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <div className="w-48 h-48 bg-yellow-300 opacity-30 rounded-full animate-bounce-slow"></div>
        <div className="w-32 h-32 bg-pink-300 opacity-30 rounded-full animate-bounce-slow delay-300"></div>
      </div>

      {/* Modal for Viewing Selected Image */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-md">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-auto h-auto max-w-3xl max-h-screen rounded-lg shadow-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 mt-2 mr-2 text-white text-3xl font-bold bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition duration-300"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;