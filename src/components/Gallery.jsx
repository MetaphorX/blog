import React, { useState } from "react";
import { urlFor } from "../client";

const Gallery = ({ details: { image } }) => {
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
    <>
      {/* Image Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        <div
          className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
          onClick={() => handleImageClick(urlFor(image))} // Set selected image when clicked
        >
          {image && (
            <img
            src={urlFor(image).url()}
            alt="shoes"
            className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300"
          />
          )}
        </div>
      </div>
{/* Modal for Viewing Selected Image */}
{selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-md">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-auto h-auto max-h-screen rounded-lg shadow-lg"
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
    </>
  );
};

export default Gallery;
