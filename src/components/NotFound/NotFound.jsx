import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 px-4 text-center">
      <h1
        className="text-7xl font-bold mb-4"
        style={{
          WebkitTextStroke: "1px red",
          color: "transparent",
        }}
      >
        404
      </h1>
      <p className="text-2xl font-semibold mb-2 text-red-900">Page Not Found</p>
      <p className="text-gray-200 mb-6">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="bg-gray-600 activeYellow px-6 py-2 rounded hover:bg-gray-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
