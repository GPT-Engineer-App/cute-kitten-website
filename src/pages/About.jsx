import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-2xl text-center px-4">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">About Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to Adorable Kitten World! We're passionate about sharing the joy and cuteness of kittens with everyone. Our mission is to brighten your day with adorable kitten pictures.
        </p>
        <Link to="/" className="text-blue-500 hover:text-blue-700 font-medium">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default About;