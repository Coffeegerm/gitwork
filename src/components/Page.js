import React from "react";

export const Page = ({ children }) => (
  <div className="container mx-auto">
    <h1 className="mt-6 mb-2 text-black text-3xl">GitWork</h1>
    <h1 className="mb-4 text-base text-gray-800 text-xl">Github Jobs</h1>
    {children}
  </div>
);
