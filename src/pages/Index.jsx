import React from "react";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Kitten World</h1>
        <img src="/images/cute-kitten.jpg" alt="Cute Kitten" className="rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default Index;