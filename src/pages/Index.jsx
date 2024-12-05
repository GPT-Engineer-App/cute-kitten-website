import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">Adorable Kitten World</h1>
        <img src="/images/cute-kitten.jpg" alt="Cute Kitten" className="rounded-lg shadow-lg mb-6" />
        <div>
          <Link to="/about" className="text-blue-500 hover:text-blue-700 font-medium">
            Learn About Us →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;