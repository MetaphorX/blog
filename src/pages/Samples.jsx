import React from "react";

const Samples = () => {
  const links = [
    { title: "Male Shoes", url: "/male-shoes" },
    { title: "Female Shoes", url: "/female-shoes" },
    // { title: 'Male Trousers', url: 'https://twitter.com/your-profile' },
    { title: "Female Dresses", url: "/dresses" },
    { title: "Male Fashion", url: "/male-fashion" },
    { title: "Kids", url: "/kids" },
    { title: "Others", url: "/others" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 relative">
      {/* Background image with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url("https://source.unsplash.com/random")' }}
      ></div>

      {/* Profile Section */}
      <div className="relative z-10 text-center mb-10 -mt-5 p-2 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-xl border border-white/30">
        {/* <img
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-md hover:scale-110 transition-transform duration-300"
          src="https://via.placeholder.com/150"
          alt="Profile"
        /> */}
        <h1 className="text-2xl font-bold text-white">
          Ayonete Shopping Spree
        </h1>
        <h1 className="font-sm text-white">- Our Samples -</h1>
      </div>

      {/* Links Section */}
      <div className="relative z-10 w-full max-w-xs space-y-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="block w-full text-center py-3 text-lg font-semibold bg-white bg-opacity-70 rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            rel="noopener noreferrer"
          >
            {link.title}
          </a>
        ))}
      </div>

      {/* Subtle floating animation */}
      <div className="absolute inset-0 flex justify-between z-0">
        <div className="w-48 h-48 bg-yellow-300 opacity-30 rounded-full animate-bounce-slow"></div>
        <div className="w-32 h-32 bg-pink-300 opacity-30 rounded-full animate-bounce-slow delay-300"></div>
      </div>
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <div className="w-48 h-48 bg-yellow-300 opacity-30 rounded-full animate-bounce-slow"></div>
        <div className="w-32 h-32 bg-pink-300 opacity-30 rounded-full animate-bounce-slow delay-300"></div>
      </div>
      <div className="absolute inset-0 flex justify-center mt-64 items-center z-0">
        <div className="w-48 h-48 bg-yellow-300 opacity-30 rounded-full animate-bounce-slow"></div>
        <div className="w-32 h-32 bg-pink-300 opacity-30 rounded-full animate-bounce-slow delay-400"></div>
        <div className="w-32 h-32 bg-pink-300 opacity-30 rounded-full animate-bounce-slow delay-450"></div>
      </div>
      <div className="absolute inset-0 flex justify-around -mb-96 items-center z-0">
        <div className="w-48 h-48 bg-yellow-300 opacity-30 rounded-full animate-bounce-slow"></div>
        <div className="w-32 h-32 bg-pink-300 opacity-30 rounded-full animate-bounce-slow delay-400"></div>
        <div className="w-32 h-32 bg-pink-300 opacity-30 rounded-full animate-bounce-slow delay-450"></div>
      </div>
    </div>
  );
};

export default Samples;
