import React, { useEffect, useState } from "react";
import { client } from "../client";
import { maleShoesQuery } from "../lib";
import Gallery from "../components/Gallery";

const MaleShoe = () => {
  const [items, setItems] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle image click
  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    client.fetch(maleShoesQuery).then((data) => setItems(data));
  }, [maleShoesQuery]);
  return (
    <>
      {/*  */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 relative">
        {/* Background image with opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url("https://source.unsplash.com/random")',
          }}
        ></div>

        {/* Image Gallery Header */}
        <div className="relative z-10 text-center mb-10 p-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-xl border border-white/30">
          <h1 className="text-3xl font-bold text-white">Image Gallery</h1>
          <p className="text-gray-100 mt-2">
            Explore our collection of Male Shoe samples
          </p>
        </div>

        {items?.map((item) =>(
            <Gallery key={item._id} details={item}/>
        ))}

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
    </>
  );
};

export default MaleShoe;
