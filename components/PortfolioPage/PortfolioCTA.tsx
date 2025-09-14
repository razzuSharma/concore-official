import React from "react";

const PortfolioCTA = () => {
  return (
    <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
      <h3 className="text-2xl font-bold mb-4">
        Ready to Start Your Project?
      </h3>
      <p className="text-blue-100 mb-6">
        Let's discuss how we can bring your vision to life with innovative
        solutions.
      </p>
      <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
        Get In Touch
      </button>
    </div>
  );
};

export default PortfolioCTA;
